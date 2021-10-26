import "reflect-metadata";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import todoRouter from "./routes/todo.router";
import { errorHandler, ErrorModel } from "./middlewares/exception.middleware";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", todoRouter);

app.all("*", async (req: Request, res: Response, next: NextFunction) => {
  next({ status: 404, message: "Route Not Found" } as ErrorModel);
});
app.use(errorHandler);

export default app;
