import connectDB from "@/lib/mongodb";
import Link from "@/models/Link";

// READ
export async function GET() {
  await connectDB();
  const links = await Link.find().sort({ createdAt: -1 });
  return Response.json(links);
}

// CREATE
export async function POST(req) {
  await connectDB();
  const { title, url } = await req.json();

  const link = await Link.create({ title, url });
  return Response.json(link);
}

// UPDATE
export async function PUT(req) {
  await connectDB();
  const { id, title, url } = await req.json();

  await Link.findByIdAndUpdate(id, { title, url });
  return Response.json({ success: true });
}

// DELETE
export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();

  await Link.findByIdAndDelete(id);
  return Response.json({ success: true });
}