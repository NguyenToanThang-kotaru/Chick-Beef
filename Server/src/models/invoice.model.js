const db = require('../config/db');

exports.getAllInvoices = (callback) => {
  db.query('SELECT * FROM hoadon', callback);
};

exports.getInvoiceById = (id, callback) => {
  db.query('SELECT * FROM hoadon WHERE MaHD = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

// Lấy mã cuối cùng
exports.getLastInvoiceId = (callback) => {
  db.query("SELECT MaHD FROM hoadon ORDER BY MaHD DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaHD : null);
  });
};

exports.addInvoice = (data, callback) => {
  const {MaHD, MaNV, MaKH, TongTien, NgayXuat, MaBan} = data;
  const sql = "INSERT INTO hoadon (MaHD, MaNV, MaKH, TongTien, NgayXuat, MaBan) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [MaHD, MaNV, MaKH, TongTien, NgayXuat, MaBan], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};