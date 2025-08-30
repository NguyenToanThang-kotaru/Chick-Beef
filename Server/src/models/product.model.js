const db = require('../config/db');

exports.countProduct = (callback) => {
  db.query('SELECT ct.MaSP, sp.TenSP, SUM(ct.SoLuongSP) AS TongSoLuong, SUM(ct.ThanhTien) AS TongDoanhThu FROM chitiethd ct INNER JOIN sanpham sp ON ct.MaSP = sp.MaSP GROUP BY ct.MaSP, sp.TenSP ORDER BY TongSoLuong DESC;', callback);
};