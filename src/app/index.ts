import express from "express";
import dotenv from "dotenv";
import { errorHandler, notFound } from "../lib/helpers/not-found-errors";
import Routers from "../rest-api/routers";

dotenv.config();
const { debtsRouter, messagesRouter, usersRouter } = Routers;

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/v1/debts", debtsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/messages", messagesRouter);

app.use(notFound);
app.use(errorHandler);

process.on("unhandledRejection", (reason: Error) => {
  console.error("unhandledRejection", reason);
  throw reason;
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
