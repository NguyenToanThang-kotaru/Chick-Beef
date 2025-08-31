const accountModel = require('../models/account.model');

exports.getAllAccounts = (callback) => {
  accountModel.getAllAccounts(callback)
};

exports.getAccountByUsername = (username, callback) => {
  accountModel.getAccountByUsername(username, callback);
};

exports.searchAccount = (keyword, callback) => {
  accountModel.searchAccount(keyword, callback);
};

exports.addAccount = (data, callback) => {
  const { TenDangNhap, MatKhau, MaNV, MaQuyen} = data;

  // Kiểm tra dữ liệu trống
  if (!MatKhau) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  if(MatKhau.length > 50)
    return callback({ status: 400, message: "Mật khẩu không được vượt quá 50 ký tự" });

  const accountData = { TenDangNhap, MatKhau, MaQuyen, MaNV };
  accountModel.addAccount(accountData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, accountData);
  });

};

exports.updateAccount = (username, data, callback) => {
  const { MatKhau, MaNV, MaQuyen} = data;

  // Kiểm tra dữ liệu trống
  if (!MatKhau) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  if(MatKhau.length > 50)
    return callback({ status: 400, message: "Mật khẩu không được vượt quá 50 ký tự" });

  //  Dữ liệu update
    const accountData = { MatKhau, MaNV, MaQuyen };
    accountModel.updateAccount(username, accountData, (err, result) => {
      if (err) return callback({ status: 500, message: err.message });
      if (result.affectedRows === 0) {
        return callback({ status: 404, message: "Không tìm thấy tài khoản" });
      }
      callback(null, {
        status: 200,
        message: "Cập nhật tài khoản thành công",
        data: { TenDangNhap: username, ...accountData }
      });
    });
};

exports.deleteAccount = (username, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  accountModel.deleteAccount(username, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa tài khoản thành công"
    });
  });
};