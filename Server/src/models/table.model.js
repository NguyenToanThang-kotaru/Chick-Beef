const db = require('../config/db');

exports.getAllTables = (callback) => {
  db.query('SELECT * FROM ban WHERE IsDeleted = 0', callback);
};

exports.getTableById = (id, callback) => {
  db.query('SELECT * FROM ban WHERE MaBan = ? AND IsDeleted = 0', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

exports.searchTable = (keyword, callback) => {
  const sql = `
    SELECT * FROM ban 
    WHERE IsDeleted = 0
      AND (
        MaBan LIKE ? 
        OR SoBan LIKE ? 
        OR SucChua LIKE ? 
        OR ThoiGianGiuBan LIKE ?
        OR TrangThai LIKE ?
      )
  `;
  const likeKeyword = `%${keyword}%`;
  db.query(sql, [likeKeyword, likeKeyword, likeKeyword, likeKeyword, likeKeyword], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};


// Lấy mã cuối cùng
exports.getLastTableId = (callback) => {
  db.query("SELECT MaBan FROM ban ORDER BY MaBan DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaBan : null);
  });
};

// Lấy số bàn cuối cùng
exports.getLastNumberTable = (callback) => {
  db.query("SELECT SoBan FROM ban ORDER BY SoBan DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].SoBan : null);
  });
};

// Thêm
exports.addTable = (data, callback) => {
  const {MaBan, SoBan, SucChua, ThoiGianGiuBan, TrangThai} = data;
  const sql = "INSERT INTO ban (MaBan, SoBan, SucChua, ThoiGianGiuBan, TrangThai) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [MaBan, SoBan, SucChua, ThoiGianGiuBan, TrangThai], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Update bàn
exports.updateTable = (id, data, callback) => {
  db.query("UPDATE ban SET ? WHERE MaBan = ? AND IsDeleted = 0", [data, id], callback);
};

// Soft delete
exports.deleteTable = (id, callback) => {
  db.query("UPDATE ban SET IsDeleted = 1 WHERE MaBan = ?", [id], callback);
};