import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import User from "@/models/Portfolio";

/**
 * HELPER: Uploads a file buffer to Cloudinary
 */
const uploadToCloudinary = async (file, folder) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);
      }
    ).end(buffer);
  });
};

/* ==========================================================
   PUT: Update Project (Granular Gallery Management)
   ========================================================== */
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { slug } = await params;
    
    const formData = await req.formData();
    const project = await User.findOne({ slug });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // 1. Basic Fields Update
    project.title = formData.get("title") || project.title;
    project.location = formData.get("location") || project.location;
    project.description = formData.get("description") || project.description;
    project.category = formData.get("category") || project.category;
    project.date = formData.get("date") || project.date;

    // 2. Thumbnail Update
    const newThumb = formData.get("thumbnail");
    if (newThumb && typeof newThumb !== "string" && newThumb.size > 0) {
      project.thumbnail = await uploadToCloudinary(newThumb, "portfolio/thumbnails");
    }

    // 3. IMPORTANT: Video URL Sync (Strings)
    // Frontend se "existingGallery" mein wo saare URLs (Images + New/Old Video URLs) bhejein
    const existingGallery = JSON.parse(formData.get("existingGallery") || "[]");
    
    // 4. Handle New Gallery Files (Images/Videos from Local)
    const newGalleryFiles = formData.getAll("galleryFiles");
    let newUploadedUrls = [];

    if (newGalleryFiles.length > 0) {
      const uploadPromises = newGalleryFiles
        .filter(file => file instanceof File && file.size > 0)
        .map(file => uploadToCloudinary(file, "portfolio/gallery"));
      
      newUploadedUrls = await Promise.all(uploadPromises);
    }

    // 5. Final Merge: Existing (including new video URLs) + New Uploads
    // Purane gallery ko naye list se replace karein jo frontend ne bheji hai
    project.gallery = [...existingGallery, ...newUploadedUrls];

    // Mongoose ko batayein ki array change hua hai warna save nahi hoga
    project.markModified('gallery'); 
    
    await project.save();
    
    return NextResponse.json(project, { status: 200 });

  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/* ==========================================================
   DELETE: Remove Project
   ========================================================== */
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { slug } = await params;

    const project = await User.findOne({ slug });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Pro Tip: Clean up Cloudinary before deleting from DB
    // We only delete from DB here for simplicity
    await User.findOneAndDelete({ slug });
    
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}