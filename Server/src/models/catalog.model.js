const db = require('../config/db');

// Lấy tất cả vai trò
exports.getAllCatalogs = (callback) => {
  db.query('SELECT * FROM loaidanhmuc WHERE IsDeleted = 0', callback);
};

// Lấy vai trò theo ID
exports.getCatalogById = (id, callback) => {
  db.query('SELECT * FROM loaidanhmuc WHERE MaLDM = ? AND IsDeleted = 0', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

// Tìm kiếm vai trò
exports.searchCatalog = (keyword, callback) => {
  const sql = `
    SELECT * FROM loaidanhmuc
    WHERE IsDeleted = 0
      AND (MaLDM LIKE ? OR TenLDM LIKE ?)
  `;
  const likeKeyword = `%${keyword}%`;
  db.query(sql, [likeKeyword, likeKeyword], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

// Lấy mã vai trò cuối cùng
exports.getLastCatalogId = (callback) => {
  db.query("SELECT MaLDM FROM loaidanhmuc WHERE IsDeleted = 0 ORDER BY MaLDM DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaLDM : null);
  });
};

// Thêm vai trò
exports.addCatalog = (data, callback) => {
  const { MaLDM, TenLDM, IsDeleted } = data;
  const sql = "INSERT INTO loaidanhmuc (MaLDM, TenLDM, IsDeleted) VALUES (?, ?, ?)";
  db.query(sql, [MaLDM, TenLDM, IsDeleted || 0], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Cập nhật vai trò
exports.updateCatalog = (id, data, callback) => {
  db.query("UPDATE loaidanhmuc SET ? WHERE MaLDM = ? AND IsDeleted = 0", [data, id], callback);
};

// Xóa mềm vai trò
exports.deleteCatalog = (id, callback) => {
  db.query("UPDATE loaidanhmuc SET IsDeleted = 1 WHERE MaLDM = ?", [id], callback);
};
