import { notes } from "../modals/noteMobal.js";

export const getNotes = async (req, res) => {
  const allnotes = await notes.find();
  res.status(200).json(allnotes);
};
export const getNote = async (req, res) => {
  const note = await notes.findById(req.params.id);
  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add Body");
  }
  const create = await notes.create({
    text: req.body.text,
  });
  res.status(200).json(create);
};

export const updateNote = async (req, res) => {
  const note = await notes.findById(req.params.id);
  if (!note) {
    res.send(400);
  }
  const update = await notes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(update);
};

export const deleteNote = async (req, res) => {
  const note = await notes.findById(req.params.id);
  if (!note) {
    res.send(400);
  }
  const del = await notes.findByIdAndRemove(req.params.id);
  res.status(200).json(del);
};
