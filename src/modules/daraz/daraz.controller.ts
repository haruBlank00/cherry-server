import { CherryRouter } from "@src/classes/router";
import { Router, Request, Response } from "express";
import { DarazScrapperService } from "./daraz.service";

export class DarazScrapperController {
  router: Router;
  constructor() {
    this.router = CherryRouter;
    this.define();
  }

  define() {
    this.router
      .route("/save-categories")
      .post(DarazScrapperService.saveHeaderCategories);
  }
}
