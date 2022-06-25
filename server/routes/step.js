import express from "express";

import {
  getSteps,
  createStep,
  updateStep,
  deleteStep,
} from "../controllers/product/5_steps_process/step.js";

const router = express.Router();

router.get("/", getSteps);
router.post("/", createStep);
router.patch("/:id", updateStep);
router.delete("/:id", deleteStep);

export default router;
