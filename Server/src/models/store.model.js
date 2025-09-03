const db = require('../config/db');

exports.getAllStores = (callback) => {
  db.query('SELECT * FROM kho', callback);
};

exports.getStoreById = (id, callback) => {
  db.query('SELECT * FROM kho WHERE MaCTPN = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

// Thêm
exports.addStore = (data, callback) => {
  const {MaCTPN, SoLuongTon, NgayHetHan} = data;
  const sql = "INSERT INTO kho (MaCTPN, SoLuongTon, NgayHetHan) VALUES (?, ?, ?)";
  db.query(sql, [MaCTPN, SoLuongTon, NgayHetHan], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Giảm số lượng
exports.decreaseQuantity = (id, quantity, callback) => {
  const sql = `UPDATE kho SET SoLuongTon = SoLuongTon - ? WHERE MaCTPN = ?`;
  db.query(sql, [quantity, id], callback);
};