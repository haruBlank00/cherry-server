import { Document } from "mongoose";
type TLevelOne = {
  id: string;
  label: string;
  subcategories: TLevelTwo[];
};

type TLevelTwo = {
  id: string;
  label: string;
  href: string;
  subcategories: TLevelThree[];
};

type TLevelThree = {
  id: string;
  label: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

// flatter use this so lets keep it here :)
// this is the type we cate category from extension
export type TCategory = TLevelOne & Document;

// this category is for database,
export type Category = {
  id: string;
  spm: string;
  label: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
};

// THIS PRODUCT IS FOR THE DATABASE
// WE ALSO GET IN THIS FORMAT FORM EXTENSION

type SelectorVariant = {
  label?: string;
  image?: {
    src: string;
  };
};

type Selector = {
  title: string;
  variant: string;
  variants: SelectorVariant[];
};

type RatingDetail = {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
};

type RatingTag = {
  tag: string;
  count: string;
};

type Highlight = {
  label: string;
};

type Specification = {
  title: string;
  value: string;
};

export type Product = {
  url: string;
  name: string;
  images: { src: string; alt: string }[];
  price: {
    original: string;
    current: string;
    discount: string;
  };
  selectors: Selector[];
  ratingsAndReviews: {
    score: string;
    total: string;
    detail: RatingDetail;
    reviewTags: RatingTag[];
  };
  details: {
    highlights: Highlight[];
    contents: string;
    specifications: Specification[];
  };
};
