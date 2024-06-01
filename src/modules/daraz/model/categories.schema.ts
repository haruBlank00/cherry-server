import { Schema, model } from "mongoose";
import { Category as C } from "../types";

// TODO: denormalize the schema
// subcategoris either have image or further subcategories
// if it's the last node, it will have image
// else it will have subcategories
export const categorySchema = new Schema<C>({
  id: String,
  label: String,
  href: String,
  image: {
    alt: String,
    src: String,
  },
  spm: String,
});

export const Category = model("Category", categorySchema);
