import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote, getNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.get("/:id", deleteNote);

export default router