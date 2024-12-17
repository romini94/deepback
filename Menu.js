const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  items: [menuItemSchema]
});

// Create and export the Menu model
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;  // Corrected: use 'module.exports' in lowercase
