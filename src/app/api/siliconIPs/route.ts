import connectMongo from "../../lib/mongodb";
import SiliconIP from "../../models/SiliconIP";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";

// POST: Create a new siliconIP
export async function POST(request: Request) {
  await connectMongo();

  const body = await request.json();
  const { name, details, files, isFeatured } = body;

  if (!name || !details) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const siliconIP = await SiliconIP.create({
      name,
      details,
      files,
      isFeatured,
    });

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

// PUT: Update a siliconIP (use ID as a query param)
export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await connectMongo();

  const body = await request.json();
  const { name, details, files, isFeatured } = body;

  try {
    const siliconIP = await SiliconIP.findByIdAndUpdate(
      id,
      { name, details, files, isFeatured },
      { new: true },
    );

    return NextResponse.json({ siliconIP });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a siliconIP (use ID as a query param)
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await connectMongo();

  try {
    await SiliconIP.findByIdAndDelete(id);

    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
