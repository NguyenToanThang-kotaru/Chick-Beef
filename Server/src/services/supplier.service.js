const supplierModel = require('../models/supplier.model');
const { validateName, validatePhone, validateAddress } = require("./validation");

exports.getAllSuppliers = (callback) => {
  supplierModel.getAllSuppliers(callback)
};

exports.getSupplierById = (id, callback) => {
  supplierModel.getSupplierById(id, callback);
};

exports.searchSupplier = (keyword, callback) => {
  supplierModel.searchSupplier(keyword, callback);
};


exports.getNextSupplierId = (callback) => {
  supplierModel.getLastSupplierId((err, lastId) => {
    if (err) return callback(err);

    let newId = "NCC00001";
    if (lastId) {
      const num = parseInt(lastId.replace("NCC", "")) + 1;
      newId = "NCC" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.addSupplier = (data, callback) => {
  const { MaNCC, TenNCC, DiaChi, SDT } = data;

  // Kiểm tra dữ liệu trống
  if (!TenNCC || !SDT || !DiaChi) {
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });
  }

  // Validate dữ liệu
  let error;
  error = validateName(TenNCC) || validatePhone(SDT);

  if (error) 
    return callback({ status: 400, message: error });

  if(TenNCC.length > 100)
    return callback({ status: 400, message: "Tên nhà cung cấp không được vượt quá 100 ký tự" });
  if(DiaChi.length > 200)
    return callback({ status: 400, message: "Địa chỉ không được vượt quá 200 ký tự" });

  // Kiểm tra số điện thoại trùng
  supplierModel.checkPhoneExists(SDT, (err, exists) => {
    if (err) return callback({ status: 500, message: "Lỗi cơ sở dữ liệu" });
    if (exists) {
      return callback({ status: 400, message: "Số điện thoại đã tồn tại" });
    }

    // Thêm nhà cung cấp vào DB
    const supplierData = { MaNCC, TenNCC, DiaChi, SDT };
    supplierModel.addSupplier(supplierData, (err, result) => {
      if (err) return callback({ status: 500, message: err.message });
      callback(null, supplierData); // trả dữ liệu nhà cung cấp mới
    });
  });
};


exports.updateSupplier = (id, data, callback) => {
  const { TenNCC, SDT, DiaChi } = data;

  // Kiểm tra dữ liệu trống
  if (!TenNCC || !SDT || !DiaChi) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateName(TenNCC) || validatePhone(SDT);
  if (error) 
    return callback({ status: 400, message: error });

  if(TenNCC.length > 100)
    return callback({ status: 400, message: "Tên nhà cung cấp không được vượt quá 100 ký tự" });
  if(DiaChi.length > 200)
    return callback({ status: 400, message: "Địa chỉ không được vượt quá 200 ký tự" });
  // Kiểm tra số điện thoại trùng (trừ chính nhà cung cấp đó)
  supplierModel.checkPhoneExistsForUpdate(SDT, id, (err, exists) => {
    if (err) return callback({ status: 500, message: "Lỗi cơ sở dữ liệu" });
    if (exists) {
      return callback({ status: 400, message: "Số điện thoại đã tồn tại" });
    }

    //  Dữ liệu update
    const supplierData = { TenNCC, DiaChi, SDT };
    supplierModel.updateSupplier(id, supplierData, (err, result) => {
      if (err) return callback({ status: 500, message: err.message });
      if (result.affectedRows === 0) {
        return callback({ status: 404, message: "Không tìm thấy nhà cung cấp" });
      }
      callback(null, {
        status: 200,
        message: "Cập nhật nhà cung cấp thành công",
        data: { MaNCC: id, ...supplierData }
      });
    });
  });
};

exports.deleteSupplier = (id, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  supplierModel.deleteSupplier(id, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa nhà cung cấp thành công"
    });
  });
};