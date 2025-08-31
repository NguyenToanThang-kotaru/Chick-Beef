const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalog.controller');
const authenticateToken = require('../middleware/authMiddleware');
const e = require('express');

// Đếm sản phẩm bán chạy nhất
router.get('/count', authenticateToken.authenticateToken, catalogController.countCatalog);

// GET /api/catalog/nextid (lấy mã tiếp theo)
router.get('/nextid', authenticateToken.authenticateToken, catalogController.getNextCatalogId);

// GET /api/catalog/search?keyword=abc (tìm kiếm)
router.get('/search', authenticateToken.authenticateToken, catalogController.searchCatalog);

// GET /api/catalog (lấy tất cả)
router.get('/', authenticateToken.authenticateToken, catalogController.getAllCatalogs);

// PUT /api/catalog/update/:id (cập nhật)
router.put('/update/:id', authenticateToken.authenticateToken, catalogController.updateCatalog);

// GET /api/catalog/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, catalogController.getCatalogById);

// POST /api/catalog (thêm mới)
router.post('/', authenticateToken.authenticateToken, catalogController.addCatalog);

exports = module.exports = router;