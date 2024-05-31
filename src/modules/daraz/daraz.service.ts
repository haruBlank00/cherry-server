import { Request, Response } from "express";
import mongoose from "mongoose";

class DarazScrapperServiceClass {
  async saveHeaderCategories(req: Request, res: Response) {
    const { body } = req;
    return res.json({
      ok: "Ok, save categories here ",
      body,
    });
  }
}

export const DarazScrapperService = new DarazScrapperServiceClass();
