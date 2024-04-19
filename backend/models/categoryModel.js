import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: String,
  items: [],
  type: {
    type: String,
    enum: ["Emergency", "General Principle"],
    message: "{VALUE} is not supported",
  },
});

const Category = mongoose.model("Category", categorySchema);

export { Category };
