const storeService = require("../services/store.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllStores = (req, res) => {
    storeService.getAllStores((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getStoreById = (req, res) => {
  const id = req.params.id;

  storeService.getStoreById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy kho" });
    res.json(result);
  });
};

exports.addStore = (req, res) => {
  const storeData = req.body;

  storeService.addStore(storeData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm kho thành công", store: result });
  });
};

exports.decreaseQuantity = (req, res) => {
  const id = req.params.id;
  const { quantity } = req.body;

  if (!quantity || isNaN(quantity)) {
    return res.status(400).json({ message: "Số lượng không hợp lệ" });
  }

  storeService.decreaseQuantity(id, quantity, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Cập nhật số lượng thành công" });
  });
};
