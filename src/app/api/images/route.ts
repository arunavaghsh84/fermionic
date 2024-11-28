import connectMongo from "../../lib/mongodb";
import { NextResponse } from "next/server";
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

  if (!image) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // Store on server
    const buffer = Buffer.from(await image.arrayBuffer());
    const imagePath = path.join(
      "/uploads",
      `${randomstring.generate()}.${image.name.split(".").pop()}`,
    );

    await fs.writeFile(`public${imagePath}`, buffer, (err) => {
      console.log(err);
    });

    // Upload to Cloudinary
    const cloudinaryResponse = await cloudinary.v2.uploader.upload(
      `public${imagePath}`,
      {
        folder: "uploads/images",
      },
    );

    // Cleanup local file after upload
    await fs.unlink(`public${imagePath}`, (err) => {
      console.log(err);
    });

    return NextResponse.json({ url: cloudinaryResponse.url }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
