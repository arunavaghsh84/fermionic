import mongoose, { Document, Model, Schema } from "mongoose";

interface IFile {
  name: string;
  url: string;
  type: string;
}

interface IProduct extends Document {
  name: string;
  shortDescription: string;
  details: string;
  files: IFile[];
  isFeatured: boolean;
  createdAt?: Date;
}

const ProductSchema: Schema<IProduct> = new mongoose.Schema({
  name: { type: String, required: true },
  shortDescription: { type: String, required: true },
  details: { type: String, required: true },
  files: {
    type: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
        type: { type: String, required: true },
      },
    ],
    validate: {
      validator: (files: IFile[]) => Array.isArray(files),
      message: "Files must be an array of objects",
    },
  },
  isFeatured: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
