import express from "express";
import controllers from "../controllers";
import Validator from "../../lib/middlewares/Validator";

const router = express.Router();

router.get("/get", controllers.messagesController.getAllMessages);
router.post(
  "/create",
  Validator("message"),
  controllers.messagesController.createMessage
);

export default router;
