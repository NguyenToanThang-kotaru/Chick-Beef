const db = require('../config/db');

exports.getAllPermissionDetailsByPermissionId = (id, callback) => {
  db.query('SELECT MaCN, MaHanhDong FROM chitietquyen WHERE MaQuyen = ? AND IsActive = 1', [id], callback);
}

exports.getFeatureIdsByPermissionId = (id, callback) => {
  db.query('SELECT MaCN FROM chitietquyen WHERE MaQuyen = ? AND IsActive = 1', [id], callback);
}

exports.getActionIdsByPermissionId = (id, callback) => {
  db.query('SELECT MaHanhDong FROM chitietquyen WHERE MaQuyen = ? AND IsActive = 1', [id], callback);
}

exports.addPermissionDetail = (data, callback) => {
  const sql = 'INSERT INTO chitietquyen (MaQuyen, MaCN, MaHanhDong, IsActive) VALUES (?, ?, ?, 1)';
  db.query(sql, [data.MaQuyen, data.MaCN, data.MaHanhDong], callback);
}

exports.activePermissionDetail = (data, callback) => {
  const sql = 'UPDATE chitietquyen SET IsActive = 1 WHERE MaQuyen = ? AND MaCN = ? AND MaHanhDong = ?';
  db.query(sql, [data.MaQuyen, data.MaCN, data.MaHanhDong], callback);
}

exports.inactivePermissionDetail = (data, callback) => {
  const sql = 'UPDATE chitietquyen SET IsActive = 0 WHERE MaQuyen = ? AND MaCN = ? AND MaHanhDong = ?';
  db.query(sql, [data.MaQuyen, data.MaCN, data.MaHanhDong], callback);
}