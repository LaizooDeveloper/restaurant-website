import mongoose from "mongoose";
import MenuItem from "../models/MenuItem.js";

const menuItems = [
  // 🍽️ 20 Dishes
  { name: "Grilled Chicken", category: "dish", price: 12, description: "Juicy grilled chicken with spices." },
  { name: "Beef Steak", category: "dish", price: 20, description: "Premium beef steak cooked to perfection." },
  { name: "Spaghetti Bolognese", category: "dish", price: 14, description: "Italian pasta with meat sauce." },
  { name: "Chicken Burger", category: "dish", price: 10, description: "Crispy chicken burger with fries." },
  { name: "Margherita Pizza", category: "dish", price: 15, description: "Classic Italian pizza with cheese." },
  { name: "Seafood Pasta", category: "dish", price: 18, description: "Pasta with shrimp, squid, and clams." },
  { name: "Fried Rice", category: "dish", price: 9, description: "Asian-style fried rice with vegetables." },
  { name: "Lamb Chops", category: "dish", price: 22, description: "Tender lamb chops with herbs." },
  { name: "Tacos", category: "dish", price: 11, description: "Mexican-style tacos with beef." },
  { name: "Salmon Teriyaki", category: "dish", price: 19, description: "Grilled salmon with teriyaki sauce." },
  { name: "Vegetable Curry", category: "dish", price: 13, description: "Spicy curry with fresh vegetables." },
  { name: "Shawarma Plate", category: "dish", price: 12, description: "Middle Eastern-style shawarma with rice." },
  { name: "Chicken Alfredo", category: "dish", price: 16, description: "Pasta in creamy Alfredo sauce." },
  { name: "Falafel Wrap", category: "dish", price: 8, description: "Vegetarian wrap with falafel and tahini." },
  { name: "BBQ Ribs", category: "dish", price: 21, description: "Smoky and tender BBQ ribs." },
  { name: "Sushi Platter", category: "dish", price: 25, description: "Assorted sushi rolls and sashimi." },
  { name: "Grilled Kebabs", category: "dish", price: 14, description: "Mixed meat kebabs with salad." },
  { name: "Stuffed Peppers", category: "dish", price: 12, description: "Bell peppers stuffed with rice & beef." },
  { name: "Beef Lasagna", category: "dish", price: 15, description: "Classic Italian beef lasagna." },
  { name: "Chicken Nuggets", category: "dish", price: 7, description: "Crispy chicken nuggets with sauce." },

  // 🥤 10 Drinks
  { name: "Coca Cola", category: "drink", price: 3, description: "Chilled soft drink." },
  { name: "Orange Juice", category: "drink", price: 4, description: "Freshly squeezed orange juice." },
  { name: "Mojito", category: "drink", price: 5, description: "Refreshing mint mojito." },
  { name: "Mineral Water", category: "drink", price: 2, description: "Still mineral water." },
  { name: "Iced Coffee", category: "drink", price: 4, description: "Cold brewed coffee with ice." },
  { name: "Milkshake", category: "drink", price: 6, description: "Creamy milkshake with flavor options." },
  { name: "Green Tea", category: "drink", price: 3, description: "Healthy green tea." },
  { name: "Smoothie", category: "drink", price: 5, description: "Fruit smoothie blend." },
  { name: "Lemonade", category: "drink", price: 4, description: "Fresh lemonade with ice." },
  { name: "Espresso", category: "drink", price: 3, description: "Strong Italian espresso." },

  // 🍰 15 Desserts
  { name: "Cheesecake", category: "dessert", price: 7, description: "Creamy New York cheesecake." },
  { name: "Chocolate Cake", category: "dessert", price: 6, description: "Rich chocolate cake slice." },
  { name: "Ice Cream", category: "dessert", price: 5, description: "3 scoops of flavored ice cream." },
  { name: "Apple Pie", category: "dessert", price: 6, description: "Homemade apple pie with cinnamon." },
  { name: "Brownies", category: "dessert", price: 5, description: "Chewy chocolate brownies." },
  { name: "Panna Cotta", category: "dessert", price: 8, description: "Italian-style creamy dessert." },
  { name: "Baklava", category: "dessert", price: 7, description: "Sweet Middle Eastern pastry." },
  { name: "Tiramisu", category: "dessert", price: 8, description: "Coffee-flavored Italian dessert." },
  { name: "Cupcakes", category: "dessert", price: 5, description: "Mini sponge cupcakes with cream." },
  { name: "Donuts", category: "dessert", price: 4, description: "Glazed donuts with toppings." },
  { name: "Mousse", category: "dessert", price: 6, description: "Light chocolate mousse." },
  { name: "Fruit Tart", category: "dessert", price: 7, description: "Tart topped with fresh fruits." },
  { name: "Crème Brûlée", category: "dessert", price: 9, description: "French dessert with caramelized top." },
  { name: "Macarons", category: "dessert", price: 8, description: "Colorful French macarons." },
  { name: "Pancakes", category: "dessert", price: 6, description: "Fluffy pancakes with syrup." },

  // ➕ 5 Extras
  { name: "French Fries", category: "extra", price: 4, description: "Crispy golden fries." },
  { name: "Garlic Bread", category: "extra", price: 3, description: "Toasted bread with garlic butter." },
  { name: "Coleslaw", category: "extra", price: 3, description: "Creamy coleslaw salad." },
  { name: "Side Salad", category: "extra", price: 4, description: "Fresh garden salad." },
  { name: "Rice Bowl", category: "extra", price: 5, description: "Steamed rice bowl." },
];

const seedDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/restaurantDB");
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(menuItems);
    console.log("✅ Database Seeded with Menu Items!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedDB();
