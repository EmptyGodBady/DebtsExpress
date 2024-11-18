import { Router } from "express";

const router = Router();

router.get("/users");
router.post("/users");
router.delete("/users");

export default router;
