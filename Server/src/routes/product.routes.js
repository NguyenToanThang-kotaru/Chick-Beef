const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authenticateToken = require('../middleware/authMiddleware');
const e = require('express');

// Đếm sản phẩm bán chạy nhất
router.get('/count', authenticateToken.authenticateToken, productController.countProduct);

exports = module.exports = router;