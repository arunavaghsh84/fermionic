import connectMongo from "../../lib/mongodb";
import Blog from "../../models/Blog";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectMongo();

  const body = await request.json();
  console.log(body);

  const { createdBy, title, shortDescription, content, image } = body;

  if (!title || !shortDescription || !content || !image) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const blog = await Blog.create({
    createdBy,
    title,
    shortDescription,
    content,
    image,
  });

  return NextResponse.json({ blog }, { status: 201 });
}

export async function GET() {
  await connectMongo();

  const blogs = await Blog.find({});

  return NextResponse.json(blogs, { status: 200 });
}
