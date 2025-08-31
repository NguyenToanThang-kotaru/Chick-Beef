const customerModel = require('../models/customer.model');
const { validateName, validatePhone, validateAddress } = require("./validation");

exports.getAllCustomers = (callback) => {
  customerModel.getAllCustomers(callback)
};

exports.getCustomerById = (id, callback) => {
  customerModel.getCustomerById(id, callback);
};

exports.searchCustomer = (keyword, callback) => {
  customerModel.searchCustomer(keyword, callback);
};


exports.getNextCustomerId = (callback) => {
  customerModel.getLastCustomerId((err, lastId) => {
    if (err) return callback(err);

    let newId = "KH00001";
    if (lastId) {
      const num = parseInt(lastId.replace("KH", "")) + 1;
      newId = "KH" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.addCustomer = (data, callback) => {
  const { MaKH, TenKH, DiaChi, SDT } = data;

  // Kiểm tra dữ liệu trống
  if (!TenKH || !SDT) {
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });
  }

  // Validate dữ liệu
  let error;
  error = validateName(TenKH) || validatePhone(SDT);

  if (error) 
    return callback({ status: 400, message: error });

  if(TenKH.length > 100)
    return callback({ status: 400, message: "Tên khách hàng không được vượt quá 100 ký tự" });
  if(DiaChi && DiaChi.length > 200)
    return callback({ status: 400, message: "Địa chỉ không được vượt quá 200 ký tự" });

  // Kiểm tra số điện thoại trùng
  customerModel.checkPhoneExists(SDT, (err, exists) => {
    if (err) return callback({ status: 500, message: "Lỗi cơ sở dữ liệu" });
    if (exists) {
      return callback({ status: 400, message: "Số điện thoại đã tồn tại" });
    }

    // Thêm khách hàng vào DB
    const customerData = { MaKH, TenKH, DiaChi, SDT };
    customerModel.addCustomer(customerData, (err, result) => {
      if (err) return callback({ status: 500, message: err.message });
      callback(null, customerData); // trả dữ liệu khách hàng mới
    });
  });
};


exports.updateCustomer = (id, data, callback) => {
  const { TenKH, DiaChi, SDT } = data;

  // Kiểm tra dữ liệu trống
  if (!TenKH || !SDT) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateName(TenKH) || validatePhone(SDT);
  if (error) 
    return callback({ status: 400, message: error });

  if(TenKH.length > 100)
    return callback({ status: 400, message: "Tên khách hàng không được vượt quá 100 ký tự" });
  if(DiaChi && DiaChi.length > 200)
    return callback({ status: 400, message: "Địa chỉ không được vượt quá 200 ký tự" });
  // Kiểm tra số điện thoại trùng (trừ chính khách hàng đó)
  customerModel.checkPhoneExistsForUpdate(SDT, id, (err, exists) => {
    if (err) return callback({ status: 500, message: "Lỗi cơ sở dữ liệu" });
    if (exists) {
      return callback({ status: 400, message: "Số điện thoại đã tồn tại" });
    }

    //  Dữ liệu update
    const customerData = { TenKH, DiaChi, SDT };
    customerModel.updateCustomer(id, customerData, (err, result) => {
      if (err) return callback({ status: 500, message: err.message });
      if (result.affectedRows === 0) {
        return callback({ status: 404, message: "Không tìm thấy khách hàng" });
      }
      callback(null, {
        status: 200,
        message: "Cập nhật khách hàng thành công",
        data: { MaKH: id, ...customerData }
      });
    });
  });
};

exports.deleteCustomer = (id, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  customerModel.deleteCustomer(id, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa khách hàng thành công"
    });
  });
};