const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authenticateToken = require('../middleware/authMiddleware');
const e = require('express');

// Đếm sản phẩm bán chạy nhất
router.get('/count', authenticateToken.authenticateToken, productController.countProduct);

// GET /api/product/nextid
router.get('/nextid', authenticateToken.authenticateToken, productController.getNextProductId);

// GET /api/product/search?keyword=abc
router.get('/search', authenticateToken.authenticateToken, productController.searchProduct);

// PUT /api/product/update/:id
router.put('/update/:id', authenticateToken.authenticateToken, productController.updateProduct);

// PUT /api/product/delete/:id
router.put('/delete/:id', authenticateToken.authenticateToken, productController.deleteProduct);

// GET /api/product/:id
router.get('/:id', authenticateToken.authenticateToken, productController.getProductById);

// POST /api/product
router.post('/', authenticateToken.authenticateToken, productController.addProduct);

exports = module.exports = router;