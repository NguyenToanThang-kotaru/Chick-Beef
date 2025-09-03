const invoiceDetailService = require("../services/invoiceDetail.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllInvoiceDetails = (req, res) => {
    invoiceDetailService.getAllInvoiceDetails((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getInvoiceDetailByInvoiceId = (req, res) => {
  const id = req.params.id;

  invoiceDetailService.getInvoiceDetailByInvoiceId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.length === 0) return res.status(404).json({ message: "Không tìm thấy hóa đơn" });
    res.json(result);
  });
};

exports.addInvoiceDetail = (req, res) => {
  const invoiceDetailData = req.body;

  invoiceDetailService.addInvoiceDetail(invoiceDetailData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm chi tiết hóa đơn thành công", invoiceDetail: result });
  });
};
