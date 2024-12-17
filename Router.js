const express = require('express');
const Menu = require('./Controllers/Menucontroller');

const router = express.Router();


router.post('/create', Menu.createMenu);
router.post('/menus/:menuId/items', Menu.addMenuItem);


router.get('/menus/:menuId/items', Menu.viewItems);


router.post('/save', Menu.saveMenu);

module.exports = router;
