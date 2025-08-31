const reserveTableModel = require('../models/reserveTable.model');
const {validateTime } = require("./validation");

exports.getAllReserveTables = (callback) => {
  reserveTableModel.getAllReserveTables(callback)
};

exports.getReserveTableById = (id, callback) => {
  reserveTableModel.getReserveTableById(id, callback);
};

exports.searchReserveTable = (keyword, callback) => {
  reserveTableModel.searchReserveTable(keyword, callback);
};


exports.getNextReserveTableId = (callback) => {
  reserveTableModel.getLastReserveTableId((err, lastId) => {
    if (err) return callback(err);

    let newId = "DB00001";
    if (lastId) {
      const num = parseInt(lastId.replace("DB", "")) + 1;
      newId = "DB" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.addReserveTable = (data, callback) => {
  const { MaDB, MaBan, ThoiGian, MaKH} = data;

  // Kiểm tra dữ liệu trống
  if (!ThoiGian) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateTime(ThoiGian);
  if (error) 
    return callback({ status: 400, message: error });

  const reserveTableData = { MaDB, MaBan, MaKH, ThoiGian };
  reserveTableModel.addReserveTable(reserveTableData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, reserveTableData);
  });

};


exports.updateReserveTable = (id, data, callback) => {
  const { MaBan, ThoiGian, MaKH} = data;

  // Kiểm tra dữ liệu trống
  if (!ThoiGian) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateTime(ThoiGian);
  if (error) 
    return callback({ status: 400, message: error });

  //  Dữ liệu update
    const reserveTableData = { MaBan, ThoiGian, MaKH };
    reserveTableModel.updateReserveTable(id, reserveTableData, (err, result) => {
      if (err) return callback({ status: 500, message: err.message });
      if (result.affectedRows === 0) {
        return callback({ status: 404, message: "Không tìm thấy đặt bàn" });
      }
      callback(null, {
        status: 200,
        message: "Cập nhật đặt bàn thành công",
        data: { MaDB: id, ...reserveTableData }
      });
    });
};

exports.deleteReserveTable = (id, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  reserveTableModel.deleteReserveTable(id, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa đặt bàn thành công"
    });
  });
};