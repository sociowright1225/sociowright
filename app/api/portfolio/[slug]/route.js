import connectDB from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ✅ IMPORTANT

/* GET */
export async function GET(req, { params }) {
  try {
    const { slug } = await params; // ✅ FIXED

    await connectDB();

    const portfolio = await Portfolio.findOne({ slug }).lean();

    if (!portfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(portfolio);
  } catch (error) {
    console.error("GET ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}

/* UPDATE */
export async function PUT(req, { params }) {
  try {
    const { slug } = await params; // ✅ FIXED
    const body = await req.json();

    await connectDB();

    const updated = await Portfolio.findOneAndUpdate(
      { slug },
      body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update portfolio" },
      { status: 500 }
    );
  }
}

/* DELETE */
export async function DELETE(req, { params }) {
  try {
    const { slug } = await params; // ✅ FIXED

    await connectDB();

    const deleted = await Portfolio.findOneAndDelete({ slug });

    if (!deleted) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete portfolio" },
      { status: 500 }
    );
  }
}
