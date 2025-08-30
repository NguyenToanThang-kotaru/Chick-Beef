const express = require('express');
const router = express.Router();
const tableController = require('../controllers/table.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/table/nextid (lấy mã tiếp theo)
router.get('/nextid', authenticateToken.authenticateToken, tableController.getNextTableId);

// GET /api/table/nextNumberTable (lấy số bàn tiếp theo)
router.get('/nextnumbertable', authenticateToken.authenticateToken, tableController.getNextNumberTable);

// GET /api/table (lấy tất cả)
router.get('/', authenticateToken.authenticateToken, tableController.getAllTables);

// GET /api/table/search?keyword=abc (tìm kiếm)
router.get('/search', authenticateToken.authenticateToken, tableController.searchTable);

// POST /api/table (thêm mới)
router.post('/', authenticateToken.authenticateToken, tableController.addTable);

// PUT /api/table/update/:id (cập nhật)
router.put('/update/:id', authenticateToken.authenticateToken, tableController.updateTable);

// PUT /api/table/delete/:id (xóa)
router.put('/delete/:id', authenticateToken.authenticateToken, tableController.deleteTable);

// GET /api/table/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, tableController.getTableById);

module.exports = router;