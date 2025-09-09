import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: String,
  category: { type: String, enum: ["dish", "drink", "dessert", "extra"] },
  price: Number,
  description: String,
});

export default mongoose.model("MenuItem", menuItemSchema);
