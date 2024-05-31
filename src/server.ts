import express, { Application, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import mongoose from "mongoose";
import "dotenv/config";

class Cherry {
  public static app: Application;

  public static getInstance(): Application {
    if (!this.app) {
      this.app = express();
      this.configuration();
      this.start();
    }
    return this.app;
  }

  private static configuration(): void {
    this.app.set("port", 5500);

    this.app.use(express.json());

    this.app.use(cors(this.corsOptions));

    this.app.get("/", (_: Request, res: Response) => {
      return res.json({ message: "HELLOOOOO CHEERRYYYY!!!" });
    });
  }

  private static corsOptions: CorsOptions = {
    origin: "http:localhost:5173",
    optionsSuccessStatus: 200,
  };

  public static async connectDb() {
    try {
      const mongoURL = process.env.MONGO_URL;
      if (!mongoURL) {
        throw new Error("No DB url found");
      }

      mongoose.connect(mongoURL);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  public static start() {
    this.connectDb();

    Cherry.app.listen(5500, () => {
      console.info(`App running on PORT ${Cherry.app.get("port")}`);
    });
  }
}

export const cherry = Cherry.getInstance();
