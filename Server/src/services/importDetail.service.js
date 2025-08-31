const importDetailModel = require('../models/importDetail.model');
const { validateNumber, validatePrice } = require("./validation");

exports.getAllImportDetails = (callback) => {
  importDetailModel.getAllImportDetails(callback)
};

exports.getImportDetailByImportId = (id, callback) => {
  importDetailModel.getImportDetailByImportId(id, callback);
};

exports.addImportDetail = (data, callback) => {
  const { MaPN, MaNL, SoLuongNL, GiaNhapNL, ThanhTien } = data;

  // Kiểm tra dữ liệu trống
  if (!MaNL || !SoLuongNL || !GiaNhapNL) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  const error = validateNumber("Số lượng nguyên liệu", SoLuongNL) || validatePrice(GiaNhapNL);
  if (error)
    return callback({ status: 400, message: error });

  // Thêm công thức vào DB
  const importDetailData = { MaPN, MaNL, SoLuongNL, GiaNhapNL, ThanhTien };
  importDetailModel.addImportDetail(importDetailData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, importDetailData); // trả dữ liệu công thức mới
  });
};
