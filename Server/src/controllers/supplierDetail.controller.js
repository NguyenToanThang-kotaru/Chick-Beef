const supplierDetailService = require("../services/supplierDetail.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllSupplierDetails = (req, res) => {
    supplierDetailService.getAllSupplierDetails((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getSupplierDetailBySupplierId = (req, res) => {
  const id = req.params.id;

  supplierDetailService.getSupplierDetailBySupplierId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.length === 0) return res.status(404).json({ message: "Không tìm thấy nhà cung cấp" });
    res.json(result);
  });
};

exports.addSupplierDetail = (req, res) => {
  const supplierDetailData = req.body;

  supplierDetailService.addSupplierDetail(supplierDetailData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm chi tiết nhà cung cấp thành công", supplierDetail: result });
  });
};
