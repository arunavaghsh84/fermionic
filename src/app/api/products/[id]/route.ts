import connectMongo from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/app/models/Product";
import { promises as fs } from "fs";
import randomstring from "randomstring";
import path from "path";

// GET: Get a product by ID
export async function GET(_: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Product ID not provided" },
      { status: 400 },
    );
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// PUT: Update a product (use ID as a query param)
export async function PUT(request: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  const formData = await request.formData();

  const files = formData.getAll("newFiles") as File[];
  console.log(files);

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
    files: JSON.parse(formData.get("files") as string),
  };

  // Handle file uploads
  if (files) {
    const fileArray = Array.isArray(files) ? files : [files];

    const newFiles = await Promise.all(
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

    productData.files = productData.files.concat(newFiles);
  }

  try {
    const product = await Product.findByIdAndUpdate(id, productData);

    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a product (use ID as a query param)
export async function DELETE(_: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  try {
    await Product.findByIdAndDelete(id);

    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
