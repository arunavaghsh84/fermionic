import connectMongo from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/app/models/Blog";
import randomstring from "randomstring";
import path from "path";
import fs from "fs";

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
    const blog = await Blog.findById(id);

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

// PUT: Update a blog (use ID as a query param)
export async function PUT(request: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  const formData = await request.formData();

  const image = formData.get("image") as File | null;
  const title = formData.get("title") as string;
  const shortDescription = formData.get("shortDescription") as string;
  const content = formData.get("content") as string;
  const authorName = formData.get("authorName") as string;

  if (!title || !shortDescription || !content || !authorName) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  let imagePath;

  if (image) {
    // Store on server
    const buffer = Buffer.from(await image.arrayBuffer());
    imagePath = path.join(
      "/uploads/blogs",
      `${randomstring.generate()}.${image.name.split(".").pop()}`,
    );

    await fs.writeFile(`public${imagePath}`, buffer, (err) => {
      console.log(err);
    });
  }

  try {
    const blog = await Blog.findByIdAndUpdate(id, {
      title,
      shortDescription,
      content,
      image: imagePath,
      authorName,
    });

    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a blog (use ID as a query param)
export async function DELETE(_: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  try {
    await Blog.findByIdAndDelete(id);

    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
