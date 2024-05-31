import { Request, Response } from "express";
import { Category, categorySchema } from "./model/categories.schema";
import { model } from "mongoose";

class DarazScrapperServiceClass {
  category: typeof Category;
  constructor() {
    this.category = Category;
    this.saveHeaderCategories = this.saveHeaderCategories.bind(this);
  }

  async saveHeaderCategories(req: Request, res: Response) {
    const { body } = req;
    const categories = await this.category.create(body);
    return res.json({
      body,
    });
  }
}

export const DarazScrapperService = new DarazScrapperServiceClass();
