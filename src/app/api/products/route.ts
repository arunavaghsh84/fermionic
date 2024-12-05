import connectMongo from "../../lib/mongodb";
import Product from "../../models/Product";
import { NextResponse } from "next/server";
import User from "@/app/models/User";
import { promises as fs } from "fs";
import randomstring from "randomstring";
import path from "path";

// POST: Create a new product
export async function POST(request: Request) {
  await connectMongo();

  const formData = await request.formData();

  const files = formData.getAll("newFiles") as File[];
  const name = formData.get("name") as string;
  const shortDescription = formData.get("shortDescription") as string;
  const details = formData.get("details") as string;
  const isFeatured = formData.get("isFeatured") as string;

  if (!name || !shortDescription || !details || !isFeatured) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Validate fields and files
  const productData = {
    name,
    shortDescription,
    details,
    isFeatured: isFeatured === "true",
    files: [],
  };

  // Handle file uploads
  if (files) {
    const fileArray = Array.isArray(files) ? files : [files];

    productData.files = await Promise.all(
      fileArray.map(async (file: File) => {
        // Store on server
        const buffer = Buffer.from(await file.arrayBuffer());
        const filePath = path.join(
          "/uploads/products",
          `${randomstring.generate()}.${file.name.split(".").pop()}`,
        );

        await fs.writeFile(`public${filePath}`, buffer);

        return {
          name: file.name,
          url: filePath,
          type: file.type,
        };
      }),
    );
  }

  try {
    const product = new Product(productData);
    await product.save();

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET: Get all products
export async function GET() {
  try {
    await connectMongo();

    // Due to a error I need to load User model unnessarily
    // Schema hasn't been registered for model \"User\".\nUse mongoose.model(name, schema)
    // After understanding the error I will remove this
    User.find({}).limit(1);

    const products = await Product.find({});

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
