import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const notes = mongoose.model("notes", noteSchema);
