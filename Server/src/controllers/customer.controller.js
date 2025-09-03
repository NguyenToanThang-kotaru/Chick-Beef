const customerService = require("../services/customer.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllCustomers = (req, res) => {
    customerService.getAllCustomers((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getCustomerById = (req, res) => {
  const id = req.params.id;

  customerService.getCustomerById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy khách hàng" });
    res.json(result);
  });
};

exports.searchCustomer = (req, res) => {
  const keyword = req.query.keyword || "";
  customerService.searchCustomer(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getNextCustomerId = (req, res) => {
  customerService.getNextCustomerId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.addCustomer = (req, res) => {
  const customerData = req.body;

  customerService.addCustomer(customerData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm khách hàng thành công", customer: result });
  });
};

exports.updateCustomer = (req, res) => {
  const id = req.params.id;
  const customerData = req.body;

  customerService.updateCustomer(id, customerData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }

    res.status(200).json({ success: true, message: "Sửa khách hàng thành công", customer: result });
  });
};

exports.deleteCustomer = (req, res) => {
  const id = req.params.id;

  customerService.deleteCustomer(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy khách hàng" });

    res.json({ message: "Xóa khách hàng thành công" });
  });
};