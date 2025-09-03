const db = require('../config/db');

exports.getAllPayments = (callback) => {
  db.query('SELECT * FROM thanhtoan', callback);
};

exports.getPaymentById = (id, callback) => {
  db.query('SELECT * FROM thanhtoan WHERE MaTT = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  })
};

exports.searchPayment = (keyword, callback) => {
  const sql = `
    SELECT * FROM thanhtoan 
      WHERE (
        MaTT LIKE ? 
        OR PhuongThucTT LIKE ? 
        OR MaHD LIKE ? 
        OR ThoiGianTT LIKE ?
        OR SoTienTra LIKE ?
        OR SoTienThoi LIKE ?
      )
  `;
  const likeKeyword = `%${keyword}%`;
  db.query(sql, [likeKeyword, likeKeyword, likeKeyword, likeKeyword, likeKeyword, likeKeyword], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};


// Lấy mã cuối cùng
exports.getLastPaymentId = (callback) => {
  db.query("SELECT MaTT FROM thanhtoan ORDER BY MaTT DESC LIMIT 1", (err, results) => {
    if (err) return callback(err);
    callback(null, results.length > 0 ? results[0].MaTT : null);
  });
};


// Thêm
exports.addPayment = (data, callback) => {
  const {MaTT, PhuongThucTT, MaHD, ThoiGianTT, SoTienTra, SoTienThoi} = data;
  const sql = "INSERT INTO thanhtoan (MaTT, PhuongThucTT, MaHD, ThoiGianTT, SoTienTra, SoTienThoi) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [MaTT, PhuongThucTT, MaHD, ThoiGianTT, SoTienTra, SoTienThoi], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
