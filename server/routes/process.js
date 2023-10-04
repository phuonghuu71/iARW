import express from "express";

import {
  getProcesses,
  getProcessesByProd,
  createProcess,
  updateProcess,
  deleteProcess,
} from "../controllers/product/5_steps_process/process.js";

const router = express.Router();

router.get("/", getProcesses);
router.get("/:id", getProcessesByProd);
router.post("/", createProcess);
router.patch("/:id", updateProcess);
router.delete("/:id", deleteProcess);

export default router;
