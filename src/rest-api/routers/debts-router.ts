import express from "express";
import controllers from "../controllers";
import Validator from "../../lib/middlewares/Validator";

const router = express.Router();

router.get("/debt", controllers.debtsController.getAllDebts);
router.post("/debt", Validator("debt"), controllers.debtsController.createDebt);
router.put("/debt/:id", controllers.debtsController.updateDebt);
router.delete("/debt", controllers.debtsController.deleteDebt);

export default router;
