const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/store/
router.get('/', authenticateToken.authenticateToken, storeController.getAllStores);

// GET /api/store/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, storeController.getStoreById);

// POST /api/store (thêm mới)
router.post('/', authenticateToken.authenticateToken, storeController.addStore);

// PUT /api/store/:id/decrease (giảm số lượng)
router.put('/:id/decrease', authenticateToken.authenticateToken, storeController.decreaseQuantity);

module.exports = router;