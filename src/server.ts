import cors, { CorsOptions } from "cors";
import "dotenv/config";
import express, { Application } from "express";
import mongoose from "mongoose";
import { ProxyRouter } from "./classes/proxyRouter";
import { logger } from "./middleware/logger";

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

    this.app.use(logger);

    this.app.use("/api/v1", ProxyRouter.map());
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
