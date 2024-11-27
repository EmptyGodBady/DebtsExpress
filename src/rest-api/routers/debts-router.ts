import express from "express";
import controllers from "../controllers";
import Validator from "../../lib/middlewares/Validator";

const router = express.Router();

router.get("/get", controllers.debtsController.getAllDebts);
router.post(
  "/create",
  Validator("debt"),
  controllers.debtsController.createDebt
);
router.put("/update", controllers.debtsController.updateDebt);
router.delete("/delete", controllers.debtsController.deleteDebt);

export default router;
