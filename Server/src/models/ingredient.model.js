const db = require('../config/db');

exports.getAllIngredients = (callback) => {
  db.query('SELECT * FROM nguyenlieu WHERE IsDeleted = 0', callback);
};

exports.getIngredientById = (id, callback) => {
  db.query('SELECT * FROM nguyenlieu WHERE MaNL = ? AND IsDeleted = 0', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

exports.searchIngredient = (keyword, callback) => {
  const sql = `
    SELECT * FROM nguyenlieu 
    WHERE IsDeleted = 0
      AND (
        MaNL LIKE ? 
        OR TenNL LIKE ? 
        OR DonViNL LIKE ? 
        OR SoLuongTon LIKE ?
      )
  `;
  const likeKeyword = `%${keyword}%`;
  db.query(sql, [likeKeyword, likeKeyword, likeKeyword, likeKeyword], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Lấy mã cuối cùng
exports.getLastIngredientId = (callback) => {
  db.query("SELECT MaNL FROM nguyenlieu ORDER BY MaNL DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaNL : null);
  });
};

// Thêm
exports.addIngredient = (data, callback) => {
  const {MaNL, TenNL, DonViNL, SoLuongTon} = data;
  const sql = "INSERT INTO nguyenlieu (MaNL, TenNL, DonViNL, SoLuongTon) VALUES (?, ?, ?, ?)";
  db.query(sql, [MaNL, TenNL, DonViNL, SoLuongTon], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Update sản phẩm
exports.updateIngredient = (id, data, callback) => {
  db.query("UPDATE nguyenlieu SET ? WHERE MaNL = ? AND IsDeleted = 0", [data, id], callback);
};

// Tăng số lượng
exports.increaseQuantity = (id, quantity, callback) => {
  const sql = `UPDATE nguyenlieu SET SoLuongTon = SoLuongTon + ? WHERE MaNL = ? AND IsDeleted = 0`;
  db.query(sql, [quantity, id], callback);
};

// Giảm số lượng
exports.decreaseQuantity = (id, quantity, callback) => {
  const sql = `UPDATE nguyenlieu SET SoLuongTon = SoLuongTon - ? WHERE MaNL = ? AND IsDeleted = 0`;
  db.query(sql, [quantity, id], callback);
};

// Soft delete
exports.deleteIngredient = (id, callback) => {
  db.query("UPDATE nguyenlieu SET IsDeleted = 1 WHERE MaNL = ?", [id], callback);
};