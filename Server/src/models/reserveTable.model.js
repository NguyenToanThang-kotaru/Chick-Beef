const db = require('../config/db');

exports.getAllReserveTables = (callback) => {
  db.query('SELECT * FROM datban WHERE IsDeleted = 0', callback);
};

exports.getReserveTableById = (id, callback) => {
  db.query('SELECT * FROM datban WHERE MaDB = ? AND IsDeleted = 0', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

exports.searchReserveTable = (keyword, callback) => {
  const sql = `
    SELECT * FROM datban 
    WHERE IsDeleted = 0
      AND (
        MaDB LIKE ? 
        OR MaBan LIKE ? 
        OR ThoiGian LIKE ? 
        OR MaKH LIKE ?
      )
  `;
  const likeKeyword = `%${keyword}%`;
  db.query(sql, [likeKeyword, likeKeyword, likeKeyword, likeKeyword], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Lấy mã cuối cùng
exports.getLastReserveTableId = (callback) => {
  db.query("SELECT MaDB FROM datban ORDER BY MaDB DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaDB : null);
  });
};

// Thêm
exports.addReserveTable = (data, callback) => {
  const {MaDB, MaBan, ThoiGian, MaKH} = data;
  const sql = "INSERT INTO datban (MaDB, MaBan, ThoiGian, MaKH) VALUES (?, ?, ?, ?)";
  db.query(sql, [MaDB, MaBan, ThoiGian, MaKH], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Update sản phẩm
exports.updateReserveTable = (id, data, callback) => {
  db.query("UPDATE datban SET ? WHERE MaDB = ? AND IsDeleted = 0", [data, id], callback);
};

// Soft delete
exports.deleteReserveTable = (id, callback) => {
  db.query("UPDATE datban SET IsDeleted = 1 WHERE MaDB = ?", [id], callback);
};