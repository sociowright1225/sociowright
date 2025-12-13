import connectDB from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const portfolio = await Portfolio.findOne({ slug: params.slug });

    if (!portfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}
