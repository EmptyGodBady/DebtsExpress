import express from "express";
import controllers from "../controllers";
import Validator from "../../lib/middlewares/Validator";

const router = express.Router();

router.get("/message", controllers.messagesController.getAllMessages);
router.post(
  "/messages",
  Validator("message"),
  controllers.messagesController.createMessage
);

export default router;
