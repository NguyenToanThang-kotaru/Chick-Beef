const db = require('../config/db');

exports.getAllUsers = (callback) => {
  db.query('SELECT * FROM users', callback);
};

exports.createUser = (data, callback) => {
  db.query('INSERT INTO users SET ?', data, callback);
};

exports.login = (username, password, callback) => {
  db.query('SELECT `TenDangNhap`, `MatKhau`, `MaNV`, `MaQuyen` FROM `taikhoan` WHERE `TenDangNhap` = ? AND `MatKhau`= ?  ', [username, password], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(null, null);
    callback(null, results[0]);
  });
}

exports.getPermissionDetailsByPermissionId = (permissionId, callback) => {
  const Sql = `
    SELECT cn.MaCN AS feature, hd.MaHanhDong AS action
    FROM chitietquyen ctq
    JOIN chucnang cn ON ctq.MaCN = cn.MaCN
    JOIN hanhdong hd ON ctq.MaHanhDong = hd.MaHanhDong
    WHERE ctq.MaQuyen = ? AND ctq.IsActive = 1
  `;
  db.query(Sql, [permissionId], (err, results) => {
    if (err) return callback(err);
    const permissions = results.map(permission => ({ 
      feature: permission.feature, 
      action: permission.action 
    }));
    callback(null, permissions);
  });
};