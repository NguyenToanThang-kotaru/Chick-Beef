const reserveTableService = require("../services/reserveTable.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllReserveTables = (req, res) => {
    reserveTableService.getAllReserveTables((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getReserveTableById = (req, res) => {
  const id = req.params.id;

  reserveTableService.getReserveTableById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy đặt bàn" });
    res.json(result);
  });
};

exports.searchReserveTable = (req, res) => {
  const keyword = req.query.keyword || "";
  reserveTableService.searchReserveTable(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getNextReserveTableId = (req, res) => {
  reserveTableService.getNextReserveTableId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.addReserveTable = (req, res) => {
  const reserveTableData = req.body;

  reserveTableService.addReserveTable(reserveTableData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Đặt bàn thành công", reserveTable: result });
  });
};

exports.updateReserveTable = (req, res) => {
  const id = req.params.id;
  const reserveTableData = req.body;

  reserveTableService.updateReserveTable(id, reserveTableData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }

    res.status(200).json({ success: true, message: "Sửa đặt bàn thành công", reserveTable: result });
  });
};

exports.deleteReserveTable = (req, res) => {
  const id = req.params.id;

  reserveTableService.deleteReserveTable(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy đặt bàn" });

    res.json({ message: "Xóa đặt bàn thành công" });
  });
};