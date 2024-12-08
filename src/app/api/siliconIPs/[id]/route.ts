import connectMongo from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import SiliconIP from "@/app/models/SiliconIP";
import { promises as fs } from "fs";
import randomstring from "randomstring";
import path from "path";

// GET: Get a siliconIP by ID
export async function GET(_: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Silicon IP ID not provided" },
      { status: 400 },
    );
  }

  try {
    const siliconIP = await SiliconIP.findById(id);

    if (!siliconIP) {
      return NextResponse.json(
        { success: false, error: "Silicon IP not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ siliconIP });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// PUT: Update a siliconIP (use ID as a query param)
export async function PUT(request: NextRequest, { params }) {
  const { id } = params;

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
    files: JSON.parse(formData.get("files") as string),
  };

  // Handle file uploads
  if (files) {
    const fileArray = Array.isArray(files) ? files : [files];

    const newFiles = await Promise.all(
      fileArray.map(async (file: File) => {
        // Store on server
        const buffer = Buffer.from(await file.arrayBuffer());
        const filePath = path.join(
          "/uploads/silicon-ips",
          `${randomstring.generate()}.${file.name.split(".").pop()}`,
        );

        await fs.writeFile(`public${filePath}`, buffer);

        return {
          name: file.name,
          url: filePath,
          type: file.type,
        };
      }),
    );

    siliconIPData.files = siliconIPData.files.concat(newFiles);
  }

  try {
    const siliconIP = await SiliconIP.findByIdAndUpdate(id, siliconIPData);

    return NextResponse.json({ siliconIP });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a siliconIP (use ID as a query param)
export async function DELETE(_: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  try {
    const siliconIP = await SiliconIP.findById(id);

    if (!siliconIP) {
      return NextResponse.json(
        { success: false, error: "Silicon IP not found" },
        { status: 404 },
      );
    }

    await SiliconIP.findByIdAndDelete(id);

    // Delete files
    siliconIP.files.forEach(async (file) => {
      await fs.unlink(`public${file.url}`);
    });

    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
