import express from "express";
import mongoose from "mongoose";

import Note from "../../../models/product/5_steps_process/note.js";

const router = express.Router();

export const getNotes = async (req, res) => {
  try {
    const Notes = await Note.find();

    res.status(200).json(Notes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createNote = async (req, res) => {
  const { description, fiveStepsProcessId } = req.body;

  const newNote = new Note({ description, fiveStepsProcessId });

  try {
    await newNote.save();

    res.status(201).json(newNote);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;

  const { description, fiveStepsProcessId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedNote = { description, fiveStepsProcessId, _id: id };

  await Note.findByIdAndUpdate(id, updatedNote, { new: true });

  res.json(updatedNote);
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Note.findByIdAndRemove(id);

  res.json({
    message: "Note deleted successfully.",
  });
};

export default router;
