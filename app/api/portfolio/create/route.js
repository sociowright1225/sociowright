import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import User from "@/models/Portfolio";

// Helper: Cloudinary Upload Stream
const uploadToCloudinary = async (file, folder) => {
  // Check if file actually exists and has data
  if (!file || typeof file === 'string') return null;
  
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder, resource_type: "auto" },
        (error, result) => (error ? reject(error) : resolve(result.secure_url))
      ).end(buffer);
    });
  } catch (err) {
    console.error("Cloudinary Stream Error:", err);
    return null;
  }
};

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();

    // 1. Upload Thumbnail (with safety check)
    const thumbnailFile = formData.get("thumbnail");
    let thumbnailUrl = "";
    
    if (thumbnailFile && thumbnailFile instanceof File) {
      thumbnailUrl = await uploadToCloudinary(thumbnailFile, "portfolio/thumbnails");
    } else {
      // If thumbnail is required and missing, return error
      return NextResponse.json({ error: "Thumbnail file is required" }, { status: 400 });
    }

    // 2. Upload Multiple Gallery Files
    const galleryFiles = formData.getAll("galleryFiles");
    let galleryUrls = [];

    // Only attempt upload if there are actual File objects
    if (galleryFiles.length > 0) {
      const uploadPromises = galleryFiles
        .filter(file => file instanceof File)
        .map((file) => uploadToCloudinary(file, "portfolio/gallery"));
      
      galleryUrls = await Promise.all(uploadPromises);
      // Filter out any nulls from failed uploads
      galleryUrls = galleryUrls.filter(url => url !== null);
    }

    // 3. Save to DB
    const newProject = await User.create({
      title: formData.get("title"),
      // In your previous code you used 'name' and 'title'. 
      // Ensure your Mongoose Schema actually has both.
      name: formData.get("title"), 
      location: formData.get("location"),
      description: formData.get("description"),
      category: formData.get("category"),
      date: formData.get("date"),
      slug: formData.get("slug"),
      thumbnail: thumbnailUrl,
      gallery: galleryUrls,
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Critical Upload Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}