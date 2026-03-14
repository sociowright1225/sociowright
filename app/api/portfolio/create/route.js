import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import User from "@/models/Portfolio";

// Upload helper
const uploadToCloudinary = async (file, folder) => {
  if (!file || typeof file === "string") return null;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder,
            resource_type: "auto",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        )
        .end(buffer);
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

    /* ================= Thumbnail Upload ================= */

    const thumbnailFile = formData.get("thumbnail");
    let thumbnailUrl = "";

    if (thumbnailFile && thumbnailFile instanceof File) {
      thumbnailUrl = await uploadToCloudinary(
        thumbnailFile,
        "portfolio/thumbnails"
      );
    } else {
      return NextResponse.json(
        { error: "Thumbnail file is required" },
        { status: 400 }
      );
    }

    /* ================= Gallery Image Upload ================= */

    const galleryFiles = formData.getAll("galleryFiles");
    let galleryUrls = [];

    if (galleryFiles.length > 0) {
      const uploadPromises = galleryFiles
        .filter((file) => file instanceof File)
        .map((file) => uploadToCloudinary(file, "portfolio/gallery"));

      galleryUrls = await Promise.all(uploadPromises);
      galleryUrls = galleryUrls.filter((url) => url !== null);
    }

    /* ================= Video URLs From Frontend ================= */

    const existingGallery = JSON.parse(
      formData.get("existingGallery") || "[]"
    );

    /* ================= Merge Images + Videos ================= */

    const finalGallery = [...existingGallery, ...galleryUrls];

    /* ================= Save To Database ================= */

    const newProject = await User.create({
      title: formData.get("title"),
      name: formData.get("title"),
      location: formData.get("location"),
      description: formData.get("description"),
      category: formData.get("category"),
      date: formData.get("date"),
      slug: formData.get("slug"),
      thumbnail: thumbnailUrl,
      gallery: finalGallery,
    });

    return NextResponse.json(newProject, { status: 201 });

  } catch (error) {
    console.error("Critical Upload Error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}