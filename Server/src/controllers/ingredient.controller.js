const ingredientService = require("../services/ingredient.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllIngredients = (req, res) => {
    ingredientService.getAllIngredients((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getIngredientById = (req, res) => {
  const id = req.params.id;

  ingredientService.getIngredientById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy nguyên liệu" });
    res.json(result);
  });
};

exports.searchIngredient = (req, res) => {
  const keyword = req.query.keyword || "";
  ingredientService.searchIngredient(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getNextIngredientId = (req, res) => {
  ingredientService.getNextIngredientId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.addIngredient = (req, res) => {
  const ingredientData = req.body;

  ingredientService.addIngredient(ingredientData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm nguyên liệu thành công", ingredient: result });
  });
};

exports.updateIngredient = (req, res) => {
  const id = req.params.id;
  const ingredientData = req.body;

  ingredientService.updateIngredient(id, ingredientData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }

    res.status(200).json({ success: true, message: "Sửa nguyên liệu thành công", ingredient: result });
  });
};

exports.increaseQuantity = (req, res) => {
  const id = req.params.id;
  const { quantity } = req.body;

  ingredientService.increaseQuantity(id, quantity, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Cập nhật số lượng thành công" });
  });
};

exports.decreaseQuantity = (req, res) => {
  const id = req.params.id;
  const { quantity } = req.body;

  if (!quantity || isNaN(quantity)) {
    return res.status(400).json({ message: "Số lượng không hợp lệ" });
  }

  ingredientService.decreaseQuantity(id, quantity, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Cập nhật số lượng thành công" });
  });
};

exports.deleteIngredient = (req, res) => {
  const id = req.params.id;

  ingredientService.deleteIngredient(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy nguyên liệu" });

    res.json({ message: "Xóa nguyên liệu thành công" });
  });
};