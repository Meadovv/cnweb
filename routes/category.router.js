const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

router.get('/all', CategoryController.getAll);

module.exports = router;