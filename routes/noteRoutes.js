import express from "express";

import {
  createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controller/noteController.js";
const router = express.Router();

router.route("/").get(getNotes).post(createNote);
router.route("/:id").put(updateNote).delete(deleteNote).get(getNote);

export default router;
