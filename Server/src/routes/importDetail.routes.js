const express = require('express');
const router = express.Router();
const importDetailController = require('../controllers/importDetail.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/importDetail (lấy tất cả)
router.get('/', authenticateToken.authenticateToken, importDetailController.getAllImportDetails);

// GET /api/importDetail/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, importDetailController.getImportDetailByImportId);

// POST /api/importDetail (thêm mới)
router.post('/', authenticateToken.authenticateToken, importDetailController.addImportDetail);

exports = module.exports = router;