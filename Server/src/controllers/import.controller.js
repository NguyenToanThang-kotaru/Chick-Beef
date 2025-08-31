const importService = require("../services/import.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllImports = (req, res) => {
    importService.getAllImports((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getImportById = (req, res) => {
  const id = req.params.id;

  importService.getImportById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy phiếu nhập" });
    res.json(result);
  });
};

exports.getNextImportId = (req, res) => {
  importService.getNextImportId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.getImportsByMonth = (req, res) => {
  const { month, year } = req.params;

  importService.getImportsByMonth(month, year, (err, imports) => {
    if (err) {
      console.error("Lỗi khi lấy phiếu nhập theo tháng:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.json(imports);
  });
};

exports.updateStatusImport = (req, res) => {
  const id = req.params.id;
  const importData = req.body;

  importService.updateStatusImport(id, importData, (err, result) => {
    if (err) {
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }

    res.status(200).json({ success: true, message: "Cập nhật trạng thái phiếu nhập thành công", import: result });
  });
};

exports.addImport = (req, res) => {
  const importData = req.body;

  importService.addImport(importData, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Thêm phiếu nhập thành công", import: result });
  });
};