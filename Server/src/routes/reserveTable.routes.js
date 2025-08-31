const express = require('express');
const router = express.Router();
const reserveTableController = require('../controllers/reserveTable.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/reserveTable
router.get('/', authenticateToken.authenticateToken,reserveTableController.getAllReserveTables);

// GET /api/reserveTable/nextid (lấy mã tiếp theo)
router.get('/nextid', authenticateToken.authenticateToken, reserveTableController.getNextReserveTableId);

// GET /api/reserveTable/search?keyword=abc (tìm kiếm)
router.get('/search', authenticateToken.authenticateToken, reserveTableController.searchReserveTable);

// PUT /api/reserveTable/update/:id (cập nhật)
router.put('/update/:id', authenticateToken.authenticateToken, reserveTableController.updateReserveTable);

// PUT /api/reserveTable/delete/:id (xóa)
router.put('/delete/:id', authenticateToken.authenticateToken, reserveTableController.deleteReserveTable);

// GET /api/reserveTable/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, reserveTableController.getReserveTableById);

// POST /api/reserveTable (thêm mới)
router.post('/', authenticateToken.authenticateToken, reserveTableController.addReserveTable);

module.exports = router;