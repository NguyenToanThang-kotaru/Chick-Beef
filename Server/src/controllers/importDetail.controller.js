const importDetailService = require("../services/importDetail.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllImportDetails = (req, res) => {
    importDetailService.getAllImportDetails((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getImportDetailByImportId = (req, res) => {
  const id = req.params.id;

  importDetailService.getImportDetailByImportId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.length === 0) return res.status(404).json({ message: "Không tìm thấy phiếu nhập" });
    res.json(result);
  });
};

exports.addImportDetail = (req, res) => {
  const importDetailData = req.body;

  importDetailService.addImportDetail(importDetailData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm chi tiết phiếu nhập thành công", importDetail: result });
  });
};
