const db = require('../config/db');

exports.getAllImports = (callback) => {
  db.query('SELECT * FROM phieunhap', callback);
};

exports.getImportById = (id, callback) => {
  db.query('SELECT * FROM phieunhap WHERE MaPN = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

// Lấy mã cuối cùng
exports.getLastImportId = (callback) => {
  db.query("SELECT MaPN FROM phieunhap ORDER BY MaPN DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaPN : null);
  });
};

exports.addImport = (data, callback) => {
  const { MaPN, MaNV, MaNCC, TongTien, NgayNhap } = data;
  const sql = "INSERT INTO phieunhap (MaPN, MaNV, MaNCC, TongTien, NgayNhap) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [MaPN, MaNV, MaNCC, TongTien, NgayNhap], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Cập nhật trạng thái
exports.updateStatusImport = (id, data, callback) => {
  db.query("UPDATE phieunhap SET ? WHERE MaPN = ?", [data, id], callback);
};

// Lấy hóa đơn theo tháng và năm
exports.getImportsByMonth = (month, year, callback) => {
  const sql = `
    SELECT 
      DATE(NgayNhap) AS Ngay,
      COUNT(*) AS SoHoaDon,
      SUM(TongTien) AS TongTien
    FROM phieunhap 
    WHERE MONTH(NgayNhap) = ? AND YEAR(NgayNhap) = ?
    GROUP BY DATE(NgayNhap)
    ORDER BY Ngay ASC
  `;
  db.query(sql, [month, year], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};
