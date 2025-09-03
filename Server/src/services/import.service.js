const importModel = require('../models/import.model');

exports.getAllImports = (callback) => {
  importModel.getAllImports(callback)
};

exports.getImportById = (id, callback) => {
  importModel.getImportById(id, callback);
};

exports.getNextImportId = (callback) => {
  importModel.getLastImportId((err, lastId) => {
    if (err) return callback(err);

    let newId = "PN00001";
    if (lastId) {
      const num = parseInt(lastId.replace("PN", "")) + 1;
      newId = "PN" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.getImportsByMonth = (month, year, callback) => {
  importModel.getImportsByMonth(month,year,callback)
}


exports.updateStatusImport = (id, data, callback) => {
  const { TrangThai } = data;

  // Kiểm tra dữ liệu trống
  if (!TrangThai) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });
  //  Dữ liệu update
  const statusData = { TrangThai };
  importModel.updateStatusImport(id, statusData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    if (result.affectedRows === 0) {
      return callback({ status: 404, message: "Không tìm thấy phiếu nhập" });
    }
    callback(null, {
      status: 200,
      message: "Cập nhật phiếu nhập thành công",
      data: { MaPN: id, ...statusData }
    });
  });
};

exports.addImport = (data, callback) => {
  importModel.addImport(data, (err, result) => {
    if (err) return callback(err);
    callback(null, { ...data});
  });
};
