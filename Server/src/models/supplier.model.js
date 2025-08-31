const db = require('../config/db');

exports.getAllSuppliers = (callback) => {
  db.query('SELECT * FROM nhacungcap WHERE IsDeleted = 0', callback);
};

exports.getSupplierById = (id, callback) => {
  db.query('SELECT * FROM nhacungcap WHERE MaNCC = ? AND IsDeleted = 0', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

exports.searchSupplier = (keyword, callback) => {
  const sql = `
    SELECT * FROM nhacungcap 
    WHERE IsDeleted = 0
      AND (
        MaNCC LIKE ? 
        OR TenNCC LIKE ? 
        OR DiaChi LIKE ? 
        OR SDT LIKE ?
      )
  `;
  const likeKeyword = `%${keyword}%`;
  db.query(sql, [likeKeyword, likeKeyword, likeKeyword, likeKeyword], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};


// Lấy mã cuối cùng
exports.getLastSupplierId = (callback) => {
  db.query("SELECT MaNCC FROM nhacungcap ORDER BY MaNCC DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaNCC : null);
  });
};


// Thêm
exports.addSupplier = (data, callback) => {
  const {MaNCC, TenNCC, DiaChi, SDT} = data;
  const sql = "INSERT INTO nhacungcap (MaNCC, TenNCC, DiaChi, SDT) VALUES (?, ?, ?, ?)";
  db.query(sql, [MaNCC, TenNCC, DiaChi, SDT], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Kiểm tra số điện thoại đã tồn tại chưa
exports.checkPhoneExists = (SDT, callback) => {
  const query = "SELECT COUNT(*) AS count FROM nhacungcap WHERE SDT = ? AND IsDeleted = 0";
  db.query(query, [SDT], (err, results) => {
    if (err) return callback(err);
    const exists = results[0].count > 0;
    callback(null, exists);
  });
};

// Kiểm tra số điện thoại trùng khi update (trừ chính mình)
exports.checkPhoneExistsForUpdate = (phone, id, callback) => {
  db.query(
    "SELECT MaNCC FROM nhacungcap WHERE SDT = ? AND MaNCC != ? AND IsDeleted = 0",
    [phone, id],
    (err, results) => {
      if (err) return callback(err);
      callback(null, results.length > 0);
    }
  );
};

// Update
exports.updateSupplier = (id, data, callback) => {
  db.query("UPDATE nhacungcap SET ? WHERE MaNCC = ? AND IsDeleted = 0", [data, id], callback);
};

// Soft delete
exports.deleteSupplier = (id, callback) => {
  db.query("UPDATE nhacungcap SET IsDeleted = 1 WHERE MaNCC = ?", [id], callback);
};