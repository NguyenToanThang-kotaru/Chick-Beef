const tableModel = require('../models/table.model');
const { validateNumber, validateTime, validatePositiveInteger } = require("./validation");

exports.getAllTables = (callback) => {
  tableModel.getAllTables(callback)
};

exports.getTableById = (id, callback) => {
  tableModel.getTableById(id, callback);
};

exports.searchTable = (keyword, callback) => {
  tableModel.searchTable(keyword, callback);
};


exports.getNextTableId = (callback) => {
  tableModel.getLastTableId((err, lastId) => {
    if (err) return callback(err);

    let newId = "B00001";
    if (lastId) {
      const num = parseInt(lastId.replace("B", "")) + 1;
      newId = "B" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.getNextNumberTable = (callback) => {
  tableModel.getLastNumberTable((err, lastNumberTable) => {
    if (err) return callback(err);

    let newId = "1";
    if (lastNumberTable) {
      const num = parseInt(lastNumberTable) + 1;
      newId = num.toString();
    }
    callback(null, newId);
  });
};

exports.addTable = (data, callback) => {
  const { MaBan, SoBan, SucChua, ThoiGianGiuBan, TrangThai } = data;

  // Kiểm tra dữ liệu trống
  if (!SoBan || !ThoiGianGiuBan || !SucChua || !ThoiGianGiuBan || !TrangThai) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateNumber("Số bàn", SoBan) || validateTime(ThoiGianGiuBan) || validatePositiveInteger("Sức chứa", SucChua);
  if (error) 
    return callback({ status: 400, message: error });

  // Thêm bàn vào DB
  const tableData = { MaBan, SoBan, SucChua, ThoiGianGiuBan, TrangThai };
  tableModel.addTable(tableData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, tableData); // trả dữ liệu bàn mới
  });
};


exports.updateTable = (id, data, callback) => {
  const { SoBan, SucChua, ThoiGianGiuBan, TrangThai } = data;

  // Kiểm tra dữ liệu trống
  if (!SoBan || !ThoiGianGiuBan || !SucChua || !ThoiGianGiuBan || !TrangThai) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateNumber("Số bàn", SoBan) || validateTime(ThoiGianGiuBan) || validatePositiveInteger("Sức chứa", SucChua);
  if (error) 
    return callback({ status: 400, message: error });

  //  Dữ liệu update
  const tableData = { SoBan, SucChua, ThoiGianGiuBan, TrangThai };
  tableModel.updateTable(id, tableData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    if (result.affectedRows === 0) {
      return callback({ status: 404, message: "Không tìm thấy bàn" });
    }
    callback(null, {
      status: 200,
      message: "Cập nhật bàn thành công",
      data: { MaBan: id, ...tableData }
    });
  });
};

exports.deleteTable = (id, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  tableModel.deleteTable(id, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa bàn thành công"
    });
  });
};