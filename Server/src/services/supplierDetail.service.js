const supplierDetailModel = require('../models/supplierDetail.model');

exports.getAllSupplierDetails = (callback) => {
  supplierDetailModel.getAllSupplierDetails(callback)
};

exports.getSupplierDetailBySupplierId = (id, callback) => {
  supplierDetailModel.getSupplierDetailBySupplierId(id, callback);
};

exports.addSupplierDetail = (data, callback) => {
  const { MaNCC, MaNL} = data;

  // Kiểm tra dữ liệu trống
  if (!MaNCC || !MaNL) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Thêm công thức vào DB
  const supplierDetailData = { MaNCC, MaNL};
  supplierDetailModel.addSupplierDetail(supplierDetailData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, supplierDetailData); // trả dữ liệu công thức mới
  });
};
