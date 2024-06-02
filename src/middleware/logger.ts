import { Request, Response, NextFunction } from "express";

/**
 * Just a logger to log request method and url in console
 * @param req
 * @param res
 * @param next
 */
export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
