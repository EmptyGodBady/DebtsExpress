import express from "express";
import controllers from "../controllers";
import Validator from "../../lib/middlewares/Validator";

const router = express.Router();

router.get("/user", controllers.usersController.getAllUsers);

router.post("/user", Validator("user"), controllers.usersController.createUser);
router.delete("/user", controllers.usersController.deleteUser);

export default router;
