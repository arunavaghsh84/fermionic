import connectMongo from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/app/models/Blog";

// GET: Get a blog by ID
export async function GET(_: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Blog ID not provided" },
      { status: 400 },
    );
  }

  try {
    const blog = await Blog.findById(id).populate("createdBy");

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
