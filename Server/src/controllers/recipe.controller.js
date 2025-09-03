const recipeService = require("../services/recipe.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllRecipes = (req, res) => {
    recipeService.getAllRecipes((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getRecipeByProductId = (req, res) => {
  const id = req.params.id;

  recipeService.getRecipeByProductId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy công thức" });
    res.json(result);
  });
};

exports.searchRecipe = (req, res) => {
  const keyword = req.query.keyword || "";
  recipeService.searchRecipe(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getNextRecipeId = (req, res) => {
  recipeService.getNextRecipeId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.addRecipe = (req, res) => {
  const recipeData = req.body;

  recipeService.addRecipe(recipeData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm công thức thành công", recipe: result });
  });
};

exports.updateRecipe = (req, res) => {
  const id = req.params.id;
  const recipeData = req.body;

  recipeService.updateRecipe(id, recipeData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }

    res.status(200).json({ success: true, message: "Sửa công thức thành công", recipe: result });
  });
};

exports.deleteRecipe = (req, res) => {
  const id = req.params.id;

  recipeService.deleteRecipe(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy công thức" });

    res.json({ message: "Xóa công thức thành công" });
  });
};