import { Schema, model } from "mongoose";
import { Product } from "../types";

const productSchema = new Schema<Product>({
  url: String,
  name: String,
  images: [{ src: String, alt: String }],
  price: {
    original: String,
    current: String,
    discount: String,
  },
  selectors: [
    {
      title: String,
      variant: String,
      variants: [{ label: String, image: { src: String } }],
    },
  ],
  ratingsAndReviews: {
    score: String,
    total: String,
    detail: {
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number,
    },
    reviewTags: [{ tag: String, count: String }],
  },
  details: {
    highlights: [{ label: String }],
    contents: String,
    specifications: [{ title: String, value: String }],
  },
});

export const ProductModel = model("Product", productSchema);
