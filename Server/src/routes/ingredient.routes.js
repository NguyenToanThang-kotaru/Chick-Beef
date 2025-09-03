const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredient.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/ingredient/
<<<<<<< HEAD
router.get('/' ,authenticateToken.authenticateToken, ingredientController.getAllIngredient);
=======
router.get('/', authenticateToken.authenticateToken,ingredientController.getAllIngredients);

// GET /api/ingredient/nextid (lấy mã tiếp theo)
router.get('/nextid', authenticateToken.authenticateToken, ingredientController.getNextIngredientId);

// GET /api/ingredient/search?keyword=abc (tìm kiếm)
router.get('/search', authenticateToken.authenticateToken, ingredientController.searchIngredient);

// PUT /api/ingredient/update/:id (cập nhật)
router.put('/update/:id', authenticateToken.authenticateToken, ingredientController.updateIngredient);

// PUT /api/ingredient/delete/:id (xóa)
router.put('/delete/:id', authenticateToken.authenticateToken, ingredientController.deleteIngredient);

// GET /api/ingredient/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, ingredientController.getIngredientById);

// POST /api/ingredient (thêm mới)
router.post('/', authenticateToken.authenticateToken, ingredientController.addIngredient);

// PUT /api/ingredient/:id/increase (tăng số lượng)
router.put('/:id/increase', authenticateToken.authenticateToken, ingredientController.increaseQuantity);

// PUT /api/ingredient/:id/decrease (giảm số lượng)
router.put('/:id/decrease', authenticateToken.authenticateToken, ingredientController.decreaseQuantity);
>>>>>>> tin

module.exports = router;