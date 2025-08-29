const employeeModel = require('../models/employee.model');
const { validateName, validatePhone, validateAddress } = require("./validation");

exports.getAllEmployees = (callback) => {
  employeeModel.getAllEmployees(callback)
};

exports.getEmployeeById = (id, callback) => {
  employeeModel.getEmployeeById(id, callback);
};


exports.getNextEmployeeId = (callback) => {
  employeeModel.getLastEmployeeId((err, lastId) => {
    if (err) return callback(err);

    let newId = "NV00001";
    if (lastId) {
      const num = parseInt(lastId.replace("NV", "")) + 1;
      newId = "NV" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.addEmployee = (data, callback) => {
  const { MaNV, TenNV, DiaChi, SDT, MaVT } = data;

  // Kiểm tra dữ liệu trống
  if (!TenNV || !SDT || !DiaChi) {
    return callback({ message: "Vui lòng nhập đầy đủ thông tin" });
  }

  // Validate
  let error = validateName(TenNV) || validatePhone(SDT) || validateAddress(DiaChi);
  if (error) {
    return callback({ message: error });
  }

  // Check trùng số điện thoại
  employeeModel.checkPhoneExists(SDT, (err, exists) => {
    if (err) return callback(err);
    if (exists) {
      return callback({ message: "Số điện thoại đã tồn tại" });
    }

    // Insert vào DB
    const employeeData = {
      MaNV,
      TenNV,
      DiaChi,
      SDT,
      MaVT,
      IsDeleted: 0
    };

    employeeModel.addEmployee(employeeData, (err, result) => {
      if (err) return callback(err);
      callback(null, {
        success: true,
        message: "Thêm nhân viên thành công",
        data: employeeData
      });
    });
  });
};

exports.updateEmployee = (id, data, callback) => {
  const { TenNV, DiaChi, SDT, MaVT } = data;

  // Kiểm tra dữ liệu trống
  if (!TenNV || !SDT || !DiaChi) {
    return callback({ message: "Vui lòng nhập đầy đủ thông tin" });
  }

  // Validate
  let error = validateName(TenNV) || validatePhone(SDT) || validateAddress(DiaChi);
  if (error) {
    return callback({ message: error });
  }

  // Kiểm tra số điện thoại trùng (trừ chính nhân viên đó)
  employeeModel.checkPhoneExistsForUpdate(SDT, id, (err, exists) => {
    if (err) return callback(err);
    if (exists) {
      return callback({ message: "Số điện thoại đã tồn tại" });
    }

    // Dữ liệu update
    const employeeData = { TenNV, DiaChi, SDT, MaVT };

    employeeModel.updateEmployee(id, employeeData, (err, result) => {
      if (err) return callback(err);
      if (result.affectedRows === 0) {
        return callback(null, null); // Không tìm thấy nhân viên
      }
      callback(null, {
        success: true,
        message: "Cập nhật nhân viên thành công",
        data: { MaNV: id, ...employeeData }
      });
    });
  });
};

exports.deleteEmployee = (id, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  employeeModel.deleteEmployee(id, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa nhân viên thành công"
    });
  });
};