const db = require('../config/db');

exports.getAllProductCatalogs = (callback) => {
  db.query('SELECT * FROM danhmucsanpham', callback);
};

exports.getProductCatalogByProductId = (id, callback) => {
  db.query('SELECT * FROM danhmucsanpham WHERE MaSP = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  })
};

exports.getProductCatalogByCatalogId = (id, callback) => {
  db.query('SELECT * FROM danhmucsanpham WHERE MaLDM = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  })
};

// Thêm
exports.addProductCatalog = (data, callback) => {
  const {MaSP, MaLDM} = data;
  const sql = "INSERT INTO danhmucsanpham (MaSP, MaLDM) VALUES (?, ?)";
  db.query(sql, [MaSP, MaLDM], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
