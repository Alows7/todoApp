import Note from "../models/Note.js";
import mongoose from "mongoose";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: 1 }); // order by desc, asc (-1, 1);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error at getAllNotes controllers ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error at createNote controllers ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const id = req.params.id;
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content });
    if (!updatedNote) return res.json({ message: "Note not found" });
    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    console.error("Error at updateNote controllers ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deleteNote) return res.json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error at deleteNote controllers ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error("Error at getNote controllers ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
