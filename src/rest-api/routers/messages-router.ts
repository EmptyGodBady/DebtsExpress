import express from "express";
import controllers from "../controllers";
import Validator from "../../lib/middlewares/Validator";

const router = express.Router();

router.get("/message/:id", controllers.messagesController.getMessages);
router.post(
  "/message",
  Validator("message"),
  controllers.messagesController.createMessage
);

export default router;
