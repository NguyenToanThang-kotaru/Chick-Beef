const db = require('../config/db');

exports.getAllImportDetails = (callback) => {
  db.query('SELECT * FROM chitietphieunhap', callback);
};

exports.getImportDetailByImportId = (id, callback) => {
  db.query('SELECT * FROM chitietphieunhap WHERE MaPN = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  })
};

// Thêm
exports.addImportDetail = (data, callback) => {
  const {MaPN, MaNL, SoLuongNL, GiaNhapNL, ThanhTien} = data;
  const sql = "INSERT INTO chitietphieunhap (MaPN, MaNL, SoLuongNL, GiaNhapNL, ThanhTien) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [MaPN, MaNL, SoLuongNL, GiaNhapNL, ThanhTien], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
