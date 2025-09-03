const storeModel = require('../models/store.model');
const { validateNumber, validateDate } = require("./validation");

exports.getAllStores = (callback) => {
  storeModel.getAllStores(callback)
};

exports.getStoreById = (id, callback) => {
  storeModel.getStoreById(id, callback);
};

exports.addStore = (data, callback) => {
  const { MaCTPN, NgayHetHan, SoLuongTon} = data;

  // Kiểm tra dữ liệu trống
  if (!NgayHetHan || !SoLuongTon) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateNumber("Số lượng tồn", SoLuongTon) || validateDate(NgayHetHan);
  if (error) 
    return callback({ status: 400, message: error });

  const storeData = { MaCTPN, NgayHetHan, SoLuongTon};
  storeModel.addStore(storeData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, storeData);
  });

};

exports.decreaseQuantity = (id, quantity, callback) => {
  // validate số lượng
  const error = validateNumber("Số lượng giảm", quantity);
  if (error) return callback({ status: 400, message: error });

  storeModel.decreaseQuantity(id, quantity, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });

    if (result.affectedRows === 0) {
      return callback({ status: 404, message: "Không tìm thấy nguyên liệu" });
    }

    callback(null, {
      status: 200,
      message: "Giảm số lượng thành công"
    });
  });
};