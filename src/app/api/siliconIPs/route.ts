import connectMongo from "../../lib/mongodb";
import SiliconIP from "../../models/SiliconIP";
import { NextResponse } from "next/server";
import User from "@/app/models/User";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import randomstring from "randomstring";
import path from "path";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// POST: Create a new siliconIP
export async function POST(request: Request) {
  await connectMongo();

  const formData = await request.formData();

  const files = formData.getAll("newFiles") as File[];
  const name = formData.get("name") as string;
  const details = formData.get("details") as string;
  const isFeatured = formData.get("isFeatured") as string;

  if (!name || !details || !isFeatured) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Validate fields and files
  const siliconIPData = {
    name,
    details,
    isFeatured: isFeatured === "true",
    files: [],
  };

  // Handle file uploads
  if (files) {
    const fileArray = Array.isArray(files) ? files : [files];

    siliconIPData.files = await Promise.all(
      fileArray.map(async (file: File) => {
        // Store on server
        const buffer = Buffer.from(await file.arrayBuffer());
        const filePath = path.join(
          "/uploads/silicon-ips",
          `${randomstring.generate()}.${file.name.split(".").pop()}`,
        );

        await fs.writeFile(`public${filePath}`, buffer);

        // Upload to Cloudinary
        const cloudinaryResponse = await cloudinary.v2.uploader.upload(
          `public${filePath}`,
          {
            folder: "uploads/silicon-ips",
          },
        );

        // Cleanup local file after upload
        await fs.unlink(`public${filePath}`);

        return {
          name: file.name,
          url: cloudinaryResponse.url,
          type: file.type,
        };
      }),
    );
  }

  try {
    const siliconIP = new SiliconIP(siliconIPData);
    await siliconIP.save();

    return NextResponse.json({ siliconIP }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET: Get all siliconIPs
export async function GET() {
  try {
    await connectMongo();

    // Due to a error I need to load User model unnessarily
    // Schema hasn't been registered for model \"User\".\nUse mongoose.model(name, schema)
    // After understanding the error I will remove this
    User.find({}).limit(1);

    const siliconIPs = await SiliconIP.find({});

    return NextResponse.json(siliconIPs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
