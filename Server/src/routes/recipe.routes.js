const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/recipe (lấy tất cả)
router.get('/', authenticateToken.authenticateToken, recipeController.getAllRecipes);

// GET /api/recipe/search?keyword=abc (tìm kiếm)
router.get('/search', authenticateToken.authenticateToken, recipeController.searchRecipe);

// POST /api/recipe (thêm mới)
router.post('/', authenticateToken.authenticateToken, recipeController.addRecipe);

// PUT /api/recipe/update/:id (cập nhật)
// router.put('/update/:id', authenticateToken.authenticateToken, recipeController.updateRecipe);

// PUT /api/recipe/delete/:id (xóa)
router.put('/delete/:id', authenticateToken.authenticateToken, recipeController.deleteRecipe);

// GET /api/recipe/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, recipeController.getRecipeByProductId);

module.exports = router;