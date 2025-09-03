const db = require('../config/db');

exports.getAllCustomers = (callback) => {
  db.query('SELECT * FROM khachhang WHERE IsDeleted = 0', callback);
};

exports.getCustomerById = (id, callback) => {
  db.query('SELECT * FROM khachhang WHERE MaKH = ? AND IsDeleted = 0', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

exports.searchCustomer = (keyword, callback) => {
  const sql = `
    SELECT * FROM khachhang 
    WHERE IsDeleted = 0
      AND (
        MaKH LIKE ? 
        OR TenKH LIKE ? 
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
exports.getLastCustomerId = (callback) => {
  db.query("SELECT MaKH FROM khachhang ORDER BY MaKH DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaKH : null);
  });
};


// Thêm
exports.addCustomer = (data, callback) => {
  const {MaKH, TenKH, DiaChi, SDT} = data;
  const sql = "INSERT INTO khachhang (MaKH, TenKH, DiaChi, SDT) VALUES (?, ?, ?, ?)";
  db.query(sql, [MaKH, TenKH, DiaChi, SDT], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Kiểm tra số điện thoại đã tồn tại chưa
exports.checkPhoneExists = (SDT, callback) => {
  const query = "SELECT COUNT(*) AS count FROM khachhang WHERE SDT = ? AND IsDeleted = 0";
  db.query(query, [SDT], (err, results) => {
    if (err) return callback(err);
    const exists = results[0].count > 0;
    callback(null, exists);
  });
};

// Kiểm tra số điện thoại trùng khi update (trừ chính mình)
exports.checkPhoneExistsForUpdate = (phone, id, callback) => {
  db.query(
    "SELECT MaKH FROM khachhang WHERE SDT = ? AND MaKH != ? AND IsDeleted = 0",
    [phone, id],
    (err, results) => {
      if (err) return callback(err);
      callback(null, results.length > 0);
    }
  );
};

// Update
exports.updateCustomer = (id, data, callback) => {
  db.query("UPDATE khachhang SET ? WHERE MaKH = ? AND IsDeleted = 0", [data, id], callback);
};

// Soft delete
exports.deleteCustomer = (id, callback) => {
  db.query("UPDATE khachhang SET IsDeleted = 1 WHERE MaKH = ?", [id], callback);
};