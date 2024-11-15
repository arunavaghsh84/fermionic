import connectMongo from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import SiliconIP from "@/app/models/SiliconIP";

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
