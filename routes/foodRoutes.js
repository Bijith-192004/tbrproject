const express = require('express');
const { getFoodMenus, addFoodMenu } = require('../controllers/foodController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const router = express.Router();
router.get('/', getFoodMenus);
router.post('/', protect, adminOnly, addFoodMenu);
module.exports = router;