const paymentService = require("../services/payment.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllPayments = (req, res) => {
    paymentService.getAllPayments((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getPaymentById = (req, res) => {
  const id = req.params.id;

  paymentService.getPaymentById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy thanh toán" });
    res.json(result);
  });
};

exports.searchPayment = (req, res) => {
  const keyword = req.query.keyword || "";
  paymentService.searchPayment(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getNextPaymentId = (req, res) => {
  paymentService.getNextPaymentId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.addPayment = (req, res) => {
  const paymentData = req.body;

  paymentService.addPayment(paymentData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm thanh toán thành công", payment: result });
  });
};
