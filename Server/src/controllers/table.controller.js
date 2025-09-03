const tableService = require("../services/table.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllTables = (req, res) => {
    tableService.getAllTables((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getTableById = (req, res) => {
  const id = req.params.id;

  tableService.getTableById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy bàn" });
    res.json(result);
  });
};

exports.searchTable = (req, res) => {
  const keyword = req.query.keyword || "";
  tableService.searchTable(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getNextTableId = (req, res) => {
  tableService.getNextTableId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.getNextNumberTable = (req, res) => {
  tableService.getNextNumberTable((err, nextNumberTable) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextNumberTable });
  });
};

exports.addTable = (req, res) => {
  const tableData = req.body;

  tableService.addTable(tableData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm bàn thành công", table: result });
  });
};

exports.updateTable = (req, res) => {
  const id = req.params.id;
  const tableData = req.body;

  tableService.updateTable(id, tableData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }

    res.status(200).json({ success: true, message: "Sửa bàn thành công", table: result });
  });
};

exports.deleteTable = (req, res) => {
  const id = req.params.id;

  tableService.deleteTable(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy bàn" });

    res.json({ message: "Xóa bàn thành công" });
  });
};