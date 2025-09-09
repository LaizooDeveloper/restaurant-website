import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

// 🏠 Home Page
router.get("/", (req, res) => {
  res.render("index", { title: "Welcome to Our Restaurant" });
});

// 📋 Menu Page
router.get("/menu", async (req, res) => {
  try {
    const dishes = await MenuItem.find({ category: "dish" });
    const drinks = await MenuItem.find({ category: "drink" });
    const desserts = await MenuItem.find({ category: "dessert" });
    const extras = await MenuItem.find({ category: "extra" });

    res.render("menu", { dishes, drinks, desserts, extras, title: "Menu" });
  } catch (err) {
    res.status(500).send("Error loading menu.");
  }
});

export default router;
