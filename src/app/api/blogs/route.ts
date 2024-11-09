import connectMongo from "../../lib/mongodb";
import Blog from "../../models/Blog";
import { NextResponse } from "next/server";
import User from "@/app/models/User";

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
