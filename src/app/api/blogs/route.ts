import connectMongo from "../../lib/mongodb";
import Blog from "../../models/Blog";
import { NextResponse } from "next/server";
import User from "@/app/models/User";
import cloudinary from "cloudinary";
import randomstring from "randomstring";
import path from "path";
import fs from "fs";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// POST: Create a new blog
export async function POST(request: Request) {
  await connectMongo();

  const formData = await request.formData();

  const image = formData.get("image") as File | null;
  const title = formData.get("title") as string;
  const shortDescription = formData.get("shortDescription") as string;
  const content = formData.get("content") as string;
  const authorName = formData.get("authorName") as string;

  if (!title || !shortDescription || !content || !authorName || !image) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Store on server
  const buffer = Buffer.from(await image.arrayBuffer());
  const imagePath = path.join(
    "/uploads/blogs",
    `${randomstring.generate()}.${image.name.split(".").pop()}`,
  );

  await fs.writeFile(`public${imagePath}`, buffer, (err) => {
    console.log(err);
  });

  // Upload to Cloudinary
  const cloudinaryResponse = await cloudinary.v2.uploader.upload(
    `public${imagePath}`,
    {
      folder: "uploads/blogs",
    },
  );

  // Cleanup local file after upload
  await fs.unlink(`public${imagePath}`, (err) => {
    console.log(err);
  });

  try {
    const blog = await Blog.create({
      title,
      shortDescription,
      content,
      image: cloudinaryResponse.url,
      authorName,
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

    const blogs = await Blog.find({});

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
