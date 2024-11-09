import connectMongo from "../../lib/mongodb";
import Product from "../../models/Product";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";

// POST: Create a new product
export async function POST(request: Request) {
  await connectMongo();

  const body = await request.json();
  const { name, shortDescription, details, files, isFeatured } = body;

  if (!name || !shortDescription || !details) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const product = await Product.create({
      name,
      shortDescription,
      details,
      files,
      isFeatured,
    });

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

// PUT: Update a product (use ID as a query param)
export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await connectMongo();

  const body = await request.json();
  const { name, shortDescription, details, files, isFeatured } = body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, shortDescription, details, files, isFeatured },
      { new: true },
    );

    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a product (use ID as a query param)
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await connectMongo();

  try {
    await Product.findByIdAndDelete(id);

    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
