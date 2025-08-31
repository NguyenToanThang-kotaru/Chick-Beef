const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/account
router.get('/', authenticateToken.authenticateToken,accountController.getAllAccounts);

// GET /api/account/search?keyword=abc (tìm kiếm)
router.get('/search', authenticateToken.authenticateToken, accountController.searchAccount);

// PUT /api/account/update/:username (cập nhật)
router.put('/update/:username', authenticateToken.authenticateToken, accountController.updateAccount);

// PUT /api/account/delete/:username (xóa)
router.put('/delete/:username', authenticateToken.authenticateToken, accountController.deleteAccount);

// GET /api/account/:username (lấy theo username)
router.get('/:username', authenticateToken.authenticateToken, accountController.getAccountByUsername);

// POST /api/account (thêm mới)
router.post('/', authenticateToken.authenticateToken, accountController.addAccount);

module.exports = router;