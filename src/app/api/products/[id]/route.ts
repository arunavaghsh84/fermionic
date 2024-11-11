import connectMongo from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/app/models/Product";

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
