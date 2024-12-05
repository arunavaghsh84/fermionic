import connectMongo from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";
import validator from "validator";
import randomstring from "randomstring";
import path from "path";
import fs from "fs";

// GET: Get a user by ID
export async function GET(_: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  if (!id) {
    return NextResponse.json(
      { success: false, error: "User ID not provided" },
      { status: 400 },
    );
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// PUT: Update a user (use ID as a query param)
export async function PUT(request: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const image = formData.get("image") as File | null;
  const designation = formData.get("designation") as string;

  if (!name || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!validator.isEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email format." },
      { status: 400 },
    );
  }

  const user = await User.findOne({ email: email, _id: { $ne: id } });

  if (user) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 422 },
    );
  }

  let imagePath;

  if (image) {
    // Store on server
    const buffer = Buffer.from(await image.arrayBuffer());
    imagePath = path.join(
      "/uploads/users",
      `${randomstring.generate()}.${image.name.split(".").pop()}`,
    );

    await fs.writeFile(`public${imagePath}`, buffer, (err) => {
      console.log(err);
    });
  }

  try {
    const user = await User.findByIdAndUpdate(id, {
      name,
      email,
      designation,
      image: imagePath,
    });

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a user (use ID as a query param)
export async function DELETE(_: NextRequest, { params }) {
  const { id } = params;

  await connectMongo();

  try {
    await User.findByIdAndDelete(id);

    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
