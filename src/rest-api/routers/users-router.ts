import express from "express";
import controllers from "../controllers";
import Validator from "../../lib/middlewares/Validator";

const router = express.Router();

router.get("/get", controllers.usersController.getAllUsers);

router.post(
  "/create",
  Validator("user"),
  controllers.usersController.createUser
);
router.delete("/delete", controllers.usersController.deleteUser);

export default router;
