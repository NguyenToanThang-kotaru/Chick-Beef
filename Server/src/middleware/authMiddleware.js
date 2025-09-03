const jwt = require("jsonwebtoken");
require('dotenv').config();

// Middleware xác thực token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: "Thiếu token" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error("Token lỗi:", token);
      console.error("Chi tiết lỗi:", err.name, err.message);
      return res.status(403).json({ message: "Token không hợp lệ", error: err.message });
    }
    req.user = user;
    next();
  });
}

// Middleware phân quyền
function authorizePermission(feature, action) {
  return (req, res, next) => {
    if (!req.user || !req.user.permissions) {
      return res.status(403).json({ message: "Không có quyền truy cập" });
    }
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const hasPermission = req.user.permissions.some(
      (p) => p.feature === feature && p.action === action
    );

    if (!hasPermission) {
      return res.status(403).json({ message: "Không có quyền truy cập" });
    }

    next();
  };
}

module.exports = { authenticateToken, authorizePermission};
