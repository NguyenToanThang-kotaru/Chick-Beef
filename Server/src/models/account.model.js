const db = require('../config/db');

exports.getAllAccounts = (callback) => {
  db.query('SELECT * FROM taikhoan WHERE IsDeleted = 0', callback);
};

exports.getAccountByUsername = (username, callback) => {
  db.query('SELECT * FROM taikhoan WHERE TenDangNhap = ? AND IsDeleted = 0', [username], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

exports.searchAccount = (keyword, callback) => {
  const sql = `
    SELECT * FROM taikhoan 
    WHERE IsDeleted = 0
      AND (
        TenDangNhap LIKE ? 
        OR MatKhau LIKE ? 
        OR MaNV LIKE ? 
        OR MaQuyen LIKE ?
      )
  `;
  const likeKeyword = `%${keyword}%`;
  db.query(sql, [likeKeyword, likeKeyword, likeKeyword, likeKeyword], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Thêm
exports.addAccount = (data, callback) => {
  const {TenDangNhap, MatKhau, MaNV, MaQuyen} = data;
  const sql = "INSERT INTO taikhoan (TenDangNhap, MatKhau, MaNV, MaQuyen) VALUES (?, ?, ?, ?)";
  db.query(sql, [TenDangNhap, MatKhau, MaNV, MaQuyen], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Update sản phẩm
exports.updateAccount = (username, data, callback) => {
  db.query("UPDATE taikhoan SET ? WHERE TenDangNhap = ? AND IsDeleted = 0", [data, username], callback);
};

// Soft delete
exports.deleteAccount = (username, callback) => {
  db.query("UPDATE taikhoan SET IsDeleted = 1 WHERE TenDangNhap = ?", [username], callback);
};