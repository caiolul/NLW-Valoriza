import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(3000, () => {
  console.log("Server running");
});
