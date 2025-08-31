const db = require('../config/db');

exports.getAllSupplierDetails = (callback) => {
  db.query('SELECT * FROM chitietnhacungcap', callback);
};

exports.getSupplierDetailBySupplierId = (id, callback) => {
  db.query('SELECT * FROM chitietnhacungcap WHERE MaNCC = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  })
};

// Thêm
exports.addSupplierDetail = (data, callback) => {
  const {MaNCC, MaNL} = data;
  const sql = "INSERT INTO chitietnhacungcap (MaNCC, MaNL) VALUES (?, ?)";
  db.query(sql, [MaNCC, MaNL], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
