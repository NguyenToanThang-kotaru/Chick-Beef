const db = require('../config/db');

exports.getAllRecipes = (callback) => {
  db.query('SELECT * FROM congthuc WHERE IsDeleted = 0', callback);
};

exports.getRecipeByProductId = (id, callback) => {
  db.query('SELECT * FROM congthuc WHERE MaSP = ? AND IsDeleted = 0', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

exports.searchRecipe = (keyword, callback) => {
  const sql = `
    SELECT * FROM congthuc 
    WHERE IsDeleted = 0
      AND (
        MaSP LIKE ? 
        OR MaNL LIKE ? 
        OR DinhLuongNL LIKE ? 
      )
  `;
  const likeKeyword = `%${keyword}%`;
  db.query(sql, [likeKeyword, likeKeyword, likeKeyword], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};


// Lấy mã cuối cùng
exports.getLastRecipeId = (callback) => {
  db.query("SELECT MaSP FROM congthuc ORDER BY MaSP DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaSP : null);
  });
};


// Thêm
exports.addRecipe = (data, callback) => {
  const {MaSP, MaNL, DinhLuongNL} = data;
  const sql = "INSERT INTO congthuc (MaSP, MaNL, DinhLuongNL) VALUES (?, ?, ?)";
  db.query(sql, [MaSP, MaNL, DinhLuongNL], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Update bàn
exports.updateRecipe = (id, data, callback) => {
  db.query("UPDATE congthuc SET ? WHERE MaSP = ? AND IsDeleted = 0", [data, id], callback);
};

// Soft delete
exports.deleteRecipe = (id, callback) => {
  db.query("UPDATE congthuc SET IsDeleted = 1 WHERE MaSP = ?", [id], callback);
};