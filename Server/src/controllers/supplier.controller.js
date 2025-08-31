const supplierService = require("../services/supplier.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllSuppliers = (req, res) => {
    supplierService.getAllSuppliers((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getSupplierById = (req, res) => {
  const id = req.params.id;

  supplierService.getSupplierById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy nhà cung cấp" });
    res.json(result);
  });
};

exports.searchSupplier = (req, res) => {
  const keyword = req.query.keyword || "";
  supplierService.searchSupplier(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getNextSupplierId = (req, res) => {
  supplierService.getNextSupplierId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.addSupplier = (req, res) => {
  const supplierData = req.body;

  supplierService.addSupplier(supplierData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm nhà cung cấp thành công", supplier: result });
  });
};

exports.updateSupplier = (req, res) => {
  const id = req.params.id;
  const supplierData = req.body;

  supplierService.updateSupplier(id, supplierData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }

    res.status(200).json({ success: true, message: "Sửa nhà cung cấp thành công", supplier: result });
  });
};

exports.deleteSupplier = (req, res) => {
  const id = req.params.id;

  supplierService.deleteSupplier(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy nhà cung cấp" });

    res.json({ message: "Xóa nhà cung cấp thành công" });
  });
};