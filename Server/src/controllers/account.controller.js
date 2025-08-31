const accountService = require("../services/account.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllAccounts = (req, res) => {
    accountService.getAllAccounts((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getAccountByUsername = (req, res) => {
  const username = req.params.username;

  accountService.getAccountByUsername(username, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy tài khoản" });
    res.json(result);
  });
};

exports.searchAccount = (req, res) => {
  const keyword = req.query.keyword || "";
  accountService.searchAccount(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addAccount = (req, res) => {
  const accountData = req.body;

  accountService.addAccount(accountData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm tài khoản thành công", account: result });
  });
};

exports.updateAccount = (req, res) => {
  const username = req.params.username;
  const accountData = req.body;

  accountService.updateAccount(username, accountData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }

    res.status(200).json({ success: true, message: "Sửa tài khoản thành công", account: result });
  });
};

exports.deleteAccount = (req, res) => {
  const username = req.params.username;

  accountService.deleteAccount(username, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy tài khoản" });

    res.json({ message: "Xóa tài khoản thành công" });
  });
};