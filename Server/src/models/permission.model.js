const db = require('../config/db');

exports.getAllPermission = (callback) => {
  db.query('SELECT MaQuyen, TenQuyen FROM quyen WHERE IsDeleted = 0', callback);
};

exports.getPermissionById = (id, callback) => {
  db.query('SELECT MaQuyen, TenQuyen FROM quyen WHERE MaQuyen = ? AND IsDeleted = 0', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

exports.addPermission = (data, callback) => {
  const sql = 'INSERT INTO quyen (MaQuyen, TenQuyen, IsDeleted) VALUES (?, ?, 0)';
  db.query(sql, [data.MaQuyen, data.TenQuyen], callback);
};

exports.updatePermission = (id, data, callback) => {
  const sql = 'UPDATE quyen SET TenQuyen = ? WHERE MaQuyen = ? AND IsDeleted = 0';
  db.query(sql, [data.TenQuyen, id], callback);
};

exports.deletePermission = (id, callback) => {
  const sql = 'UPDATE quyen SET IsDeleted = 1 WHERE MaQuyen = ?';
  db.query(sql, [id], callback);
};

exports.getLastPermissonId = (callback) => {
  db.query("SELECT MaQuyen FROM quyen ORDER BY MaQuyen DESC LIMIT 1", (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
};