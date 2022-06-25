import express from "express";
import mongoose from "mongoose";

import Step from "../../../models/product/5_steps_process/step.js";

const router = express.Router();

export const getSteps = async (req, res) => {
  try {
    const steps = await Step.find();

    res.status(200).json(steps);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createStep = async (req, res) => {
  const { stepName, fiveStepsProcessId } = req.body;

  const newStep = new Step({ stepName, fiveStepsProcessId });

  try {
    await newStep.save();

    res.status(201).json(newStep);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateStep = async (req, res) => {
  const { id } = req.params;

  const { stepName, fiveStepsProcessId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedStep = { stepName, fiveStepsProcessId, _id: id };

  await Step.findByIdAndUpdate(id, updatedStep, { new: true });

  res.json(updatedStep);
};

export const deleteStep = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Step.findByIdAndRemove(id);

  res.json({
    message: "Step deleted successfully.",
  });
};

export default router;
