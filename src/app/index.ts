import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { errorHandler, notFound } from "../lib/helpers/not-found-errors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/v1/debts");
app.use("/api/v1/users");
app.use("/api/v1/messages");

app.use(notFound);
app.use(errorHandler);

process.on("unhandledRejection", (reason: Error) => {
  console.error("unhandledRejection", reason);
  throw reason;
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
