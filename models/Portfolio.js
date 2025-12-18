import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    description:{ type: String },
    slug: { type: String, required: true, unique: true },
    category: {
      type: String,
      required: true,
      enum: ["Digital Marketing", "Interior Shoots", "Ad Films"],
    },
    thumbnail: { type: String, required: true },
    gallery: { type: [String], required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.projects ||
  mongoose.model("projects", PortfolioSchema);
