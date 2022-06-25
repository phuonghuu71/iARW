import express from "express";

import {
  getProcesses,
  createProcess,
  updateProcess,
} from "../controllers/product/5_steps_process/process.js";

const router = express.Router();

router.get("/", getProcesses);
router.post("/", createProcess);
router.patch("/:id", updateProcess);
// router.delete("/:id", deleteNote);

export default router;
