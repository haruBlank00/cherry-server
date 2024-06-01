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

// this is the
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
