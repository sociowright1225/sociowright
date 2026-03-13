import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial.js";

// READ
export async function GET() {
  await connectDB();
  const data = await Testimonial.find().sort({ createdAt: -1 });
  return Response.json(data);
}

// CREATE
export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const testimonial = await Testimonial.create({
    name: body.name,
    message: body.message,
  });

  return Response.json(testimonial);
}

// UPDATE
export async function PUT(req) {
  await connectDB();
  const body = await req.json();

  await Testimonial.findByIdAndUpdate(body.id, {
    name: body.name,
    message: body.message,
  });

  return Response.json({ success: true });
}

// DELETE
export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();

  await Testimonial.findByIdAndDelete(id);
  return Response.json({ success: true });
}