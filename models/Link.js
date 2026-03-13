import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    title: { type: String},
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Link ||
  mongoose.model("Link", LinkSchema);