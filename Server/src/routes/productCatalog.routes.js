const express = require('express');
const router = express.Router();
const productCatalogController = require('../controllers/productCatalog.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/productCatalog (lấy tất cả)
router.get('/', authenticateToken.authenticateToken, productCatalogController.getAllProductCatalogs);

// POST /api/productCatalog (thêm mới)
router.post('/', authenticateToken.authenticateToken, productCatalogController.addProductCatalog);

// GET /api/productCatalog/getByProductID/:productid (lấy theo productid)
router.get('/getByProductID/:id', authenticateToken.authenticateToken, productCatalogController.getProductCatalogByProductId);

// GET /api/productCatalog/getByCatalogID/:catalogid (lấy theo catalogid)
router.get('/getByCatalogID/:id', authenticateToken.authenticateToken, productCatalogController.getProductCatalogByCatalogId);

module.exports = router;