import express from "express";
import controllers from "../controllers";
import Validator from "../../lib/middlewares/Validator";

const router = express.Router();

router.get("/users", controllers.debtsController.getAllDebts);
router.post(
  "/users",
  Validator("debt"),
  controllers.debtsController.createDebt
);
router.put("/users", controllers.debtsController.updateDebt);
router.delete("/users", controllers.debtsController.deleteDebt);

export default router;
