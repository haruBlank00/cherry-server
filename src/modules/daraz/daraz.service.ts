import { Request, Response } from "express";
import { Category, categorySchema } from "./model/categories.schema";
import { model } from "mongoose";
import { flattenCategories } from "@src/utils/flatter";
import { ProductModel } from "./model/product.schema";

class DarazScrapperServiceClass {
  category: typeof Category;
  product: typeof ProductModel;

  constructor() {
    this.category = Category;
    this.product = ProductModel;
    this.saveCategories = this.saveCategories.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  async saveCategories(req: Request, res: Response) {
    const { body } = req;
    const flatten = flattenCategories(body);

    try {
      await this.category.create(flatten);
      return res.json({
        message: "Categories saved",
        success: true,
      });
    } catch (err) {
      return res.json({
        message: "Categories not saved",
        success: false,
      });
    }
  }

  async saveProduct(req: Request, res: Response) {
    const { body } = req;

    try {
      await this.product.create(body);

      return res.json({
        message: "Product saved",
        success: true,
      });
    } catch (e) {
      return res.json({
        message: "Categories not saved",
        success: false,
      });
    }
  }

  async getProducts(req: Request, res: Response) {
    try {
      // we should add paginations and filters
      const products = await this.product.find().limit(10);
      return res.json({
        success: true,
        data: products,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.json({
          success: false,
          error: error.message,
        });
      }
    }
  }
}

export const DarazScrapperService = new DarazScrapperServiceClass();
