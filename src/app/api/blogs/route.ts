import connectMongo from "../../lib/mongodb";
import Blog from "../../models/Blog";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";

// POST: Create a new blog
export async function POST(request: Request) {
  await connectMongo();

  const body = await request.json();
  const { createdBy, title, shortDescription, content, image } = body;

  if (!title || !shortDescription || !content || !image) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const blog = await Blog.create({
      createdBy,
      title,
      shortDescription,
      content,
      image,
    });

    return NextResponse.json({ blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET: Get all blogs
export async function GET() {
  try {
    await connectMongo();

    // Due to a error I need to load User model unnessarily
    // Schema hasn't been registered for model \"User\".\nUse mongoose.model(name, schema)
    // After understanding the error I will remove this
    User.find({}).limit(1);

    const blogs = await Blog.find({}).populate("createdBy");

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Update a blog (use ID as a query param)
export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await connectMongo();

  const body = await request.json();
  const { title, shortDescription, content, image } = body;

  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, shortDescription, content, image },
      { new: true },
    );

    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a blog (use ID as a query param)
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await connectMongo();

  try {
    await Blog.findByIdAndDelete(id);

    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
