import mongoose, { Document, Model, Schema } from "mongoose";

interface IBlog extends Document {
  createdBy: mongoose.Schema.Types.ObjectId;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  createdAt?: Date;
}

const BlogSchema: Schema<IBlog> = new mongoose.Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
