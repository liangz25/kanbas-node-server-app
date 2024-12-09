import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    dueDate: Date,
    points: Number,
    module: { type: mongoose.Schema.Types.ObjectId, ref: "ModuleModel" },
  },
  { collection: "assignments" }
);

export default schema;
