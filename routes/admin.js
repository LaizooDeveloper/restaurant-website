import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

// Middleware to check login
const requireLogin = (req, res, next) => {
  if (req.session.isAdmin) return next();
  res.redirect("/admin/login");
};

// Login Page
router.get("/login", (req, res) => {
  res.render("admin-login", { error: null, title: "Admin Login" });
});

// Handle Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Simple hardcoded login
  if (username === "admin" && password === "1234") {
    req.session.isAdmin = true;
    res.redirect("/admin/dashboard");
  } else {
    res.render("admin-login", { error: "Invalid credentials", title: "Admin Login" });
  }
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/admin/login");
  });
});

// Dashboard (List all menu items)
router.get("/dashboard", requireLogin, async (req, res) => {
  const items = await MenuItem.find();
  res.render("admin-dashboard", { items, title: "Admin Dashboard" });
});

// Add New Item
router.post("/add", requireLogin, async (req, res) => {
  const { name, category, price, description } = req.body;
  await MenuItem.create({ name, category, price, description });
  res.redirect("/admin/dashboard");
});

// Delete Item
router.post("/delete/:id", requireLogin, async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.redirect("/admin/dashboard");
});

// Edit Item Form
router.get("/edit/:id", requireLogin, async (req, res) => {
  const item = await MenuItem.findById(req.params.id);
  res.render("admin-edit", { item, title: "Edit Item" });
});

// Update Item
router.post("/edit/:id", requireLogin, async (req, res) => {
  const { name, category, price, description } = req.body;
  await MenuItem.findByIdAndUpdate(req.params.id, { name, category, price, description });
  res.redirect("/admin/dashboard");
});

export default router;
