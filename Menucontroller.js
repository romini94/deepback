const Menu = require('../Models/Menu');

// Create and save a new menu
const createMenu = async (req, res) => {
  const newMenu = new Menu(req.body);
  try {
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add a menu item to a specific menu
const addMenuItem = async (req, res) => {
  const menu = await Menu.findById(req.params.menuId);
  if (!menu) {
    return res.status(404).json({ message: 'Menu not found' });
  }
  menu.items.push(req.body);
  try {
    await menu.save();
    res.status(201).json(menu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// View items of a specific menu
const viewItems = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.menuId);
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.json(menu.items); // Return only the items of the menu
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Save a menu (same as createMenu, can be removed if not needed)
const saveMenu = async (req, res) => {
  const newMenu = new Menu(req.body);
  try {
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createMenu, addMenuItem, viewItems, saveMenu };
