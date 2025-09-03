const express = require('express');
const router = express.Router();
const supplierDetailController = require('../controllers/supplierDetail.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/supplierDetail (lấy tất cả)
router.get('/', authenticateToken.authenticateToken, supplierDetailController.getAllSupplierDetails);

// POST /api/supplierDetail (thêm mới)
router.post('/', authenticateToken.authenticateToken, supplierDetailController.addSupplierDetail);

// GET /api/supplierDetail/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, supplierDetailController.getSupplierDetailBySupplierId);

module.exports = router;