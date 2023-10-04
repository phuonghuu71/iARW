import express from "express";
import mongoose from "mongoose";

import Process from "../../../models/product/5_steps_process/process.js";
import Product from "../../../models/product/product.js";
import Note from "../../../models/product/5_steps_process/note.js";
import note from "../../../models/product/5_steps_process/note.js";

const router = express.Router();

export const getProcesses = async (req, res) => {
  try {
    let processes = await Process.find({});
    res.status(200).json(processes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getProcessesByProd = async (req, res) => {
  const { id } = req.params;

  try {
    let processes = await Process.find({
      productId: id,
    });
    res.status(200).json(processes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createProcess = async (req, res) => {
  const { description, step, note, productId } = req.body;

  try {
    let newProcess = new Process({
      productId,
      description,
      step,
      note,
    });

    newProcess = await newProcess.save();

    const procs = await Process.find({
      productId: productId,
    });

    const updatedProduct = {
      process_steps: procs,
      _id: productId,
    };

    await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });

    res.status(200).json(procs);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateProcess = async (req, res) => {
  const { id } = req.params;

  const { productId, description, step, note } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedProcess = {
      productId,
      description,
      step,
      note,
      updatedAt: new Date()
        .toLocaleString("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" })
        .slice(0, 16)
        .replace("T", " "),
      _id: id,
    };

    await Process.findByIdAndUpdate(id, updatedProcess, { new: true });

    const getUpdatedProcess = await Process.find({
      _id: id,
    });

    res.status(200).json(getUpdatedProcess);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

export const deleteProcess = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Process.findByIdAndRemove(id);

  res.json({
    message: "Process deleted successfully",
  });
};

export default router;
