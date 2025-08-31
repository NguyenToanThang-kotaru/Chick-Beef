const db = require('../config/db');

exports.getAllInvoiceDetails = (callback) => {
  db.query('SELECT * FROM chitiethd', callback);
};

exports.getInvoiceDetailByInvoiceId = (id, callback) => {
  db.query('SELECT * FROM chitiethd WHERE MaHD = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  })
};

// Thêm
exports.addInvoiceDetail = (data, callback) => {
  const {MaHD, MaSP, SoLuongSP, DonGia, ThanhTien} = data;
  const sql = "INSERT INTO chitiethd (MaHD, MaSP, SoLuongSP, DonGia, ThanhTien) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [MaHD, MaSP, SoLuongSP, DonGia, ThanhTien], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
