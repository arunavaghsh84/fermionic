import connectMongo from "../../lib/mongodb";
import { NextResponse } from "next/server";
import randomstring from "randomstring";
import path from "path";
import fs from "fs";

// POST: Create a new blog
export async function POST(request: Request) {
  await connectMongo();

  try {
    const formData = await request.formData();

    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Store on server
    const buffer = Buffer.from(await image.arrayBuffer());
    const imagePath = path.join(
      "/uploads/images",
      `${randomstring.generate()}.${image.name.split(".").pop()}`,
    );

    await fs.writeFile(`public${imagePath}`, buffer, (err) => {
      console.log(err);
    });

    return NextResponse.json({ url: imagePath }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
