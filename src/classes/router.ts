import { Router as ExpressRouter, Request, Response } from "express";

class Router {
  static router: ExpressRouter;

  static getInstance() {
    if (!this.router) {
      this.router = ExpressRouter();

      this.router.get("/hello", (_: Request, res: Response) => {
        return res.json({ message: "HELLOOOOO CHEERRYYYY!!!" });
      });
    }
    return this.router;
  }
}

export const CherryRouter = Router.getInstance();
