import express from "express";
import mongoose from "mongoose";

import Process from "../../../models/product/5_steps_process/process.js";
import Note from "../../../models/product/5_steps_process/note.js";
import note from "../../../models/product/5_steps_process/note.js";

const router = express.Router();

export const getProcesses = async (req, res) => {
  try {
    let processes = await Process.find({}).populate("fiveStepsNotes");
    res.status(200).json(processes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createProcess = async (req, res) => {
  const { description, fiveStepsStepId, fiveStepsNotes } = req.body;

  try {
    let newProcess = new Process({
      description,
      fiveStepsStepId,
    });

    fiveStepsNotes.forEach((note) => {
      let newNote = new Note({ description: note.description });
      newProcess.fiveStepsNotes.push(newNote);

      newNote = newNote.save();
    });

    newProcess = await newProcess.save();

    res.status(201).json(newProcess);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateProcess = async (req, res) => {};

export default router;
