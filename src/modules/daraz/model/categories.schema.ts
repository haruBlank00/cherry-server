import { Schema, model } from "mongoose";
import { TCategory } from "../types";

// TODO: denormalize the schema
// subcategoris either have image or further subcategories
// if it's the last node, it will have image
// else it will have subcategories
export const categorySchema = new Schema<TCategory>({
  id: String,
  label: String,
  subcategories: [
    {
      id: String,
      label: String,
      href: String,
      subcategories: [
        {
          id: String,
          label: String,
          href: String,
          image: {
            src: String,
            alt: String,
          },
        },
      ],
    },
  ],
});

export const Category = model("Category", categorySchema);
