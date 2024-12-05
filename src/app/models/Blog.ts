import mongoose, { Document, Model, Schema } from "mongoose";

interface IBlog extends Document {
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  authorName: string;
  createdAt?: Date;
}

const BlogSchema: Schema<IBlog> = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  authorName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
