const ingredientModel = require('../models/ingredient.model');
const { validateNumber } = require("./validation");

exports.getAllIngredients = (callback) => {
  ingredientModel.getAllIngredients(callback)
};

exports.getIngredientById = (id, callback) => {
  ingredientModel.getIngredientById(id, callback);
};

exports.searchIngredient = (keyword, callback) => {
  ingredientModel.searchIngredient(keyword, callback);
};


exports.getNextIngredientId = (callback) => {
  ingredientModel.getLastIngredientId((err, lastId) => {
    if (err) return callback(err);

    let newId = "NL00001";
    if (lastId) {
      const num = parseInt(lastId.replace("NL", "")) + 1;
      newId = "NL" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.addIngredient = (data, callback) => {
  const { MaNL, TenNL, DonViNL, SoLuongTon} = data;

  // Kiểm tra dữ liệu trống
  if (!TenNL || !SoLuongTon || !DonViNL) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateNumber("Số lượng tồn", SoLuongTon);
  if (error) 
    return callback({ status: 400, message: error });
  if (TenNL.length > 100) 
    return callback({ status: 400, message: "Tên nguyên liệu không quá 100 kí tự" });

  const ingredientData = { MaNL, TenNL, SoLuongTon, DonViNL };
  ingredientModel.addIngredient(ingredientData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, ingredientData);
  });

};


exports.updateIngredient = (id, data, callback) => {
  const { MaNL, TenNL, DonViNL, SoLuongTon} = data;

  // Kiểm tra dữ liệu trống
  if (!TenNL || !SoLuongTon || !DonViNL) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validateNumber("Số lượng tồn", SoLuongTon);
  if (error) 
    return callback({ status: 400, message: error });
  if (TenNL.length > 100) 
    return callback({ status: 400, message: "Tên nguyên liệu không quá 100 kí tự" });

  //  Dữ liệu update
    const ingredientData = { TenNL, DonViNL, SoLuongTon };
    ingredientModel.updateIngredient(id, ingredientData, (err, result) => {
      if (err) return callback({ status: 500, message: err.message });
      if (result.affectedRows === 0) {
        return callback({ status: 404, message: "Không tìm thấy nguyên liệu" });
      }
      callback(null, {
        status: 200,
        message: "Cập nhật nguyên liệu thành công",
        data: { MaNL: id, ...ingredientData }
      });
    });
};

exports.increaseQuantity = (id, quantity, callback) => {
  // validate số lượng
  const error = validateNumber("Số lượng tăng", quantity);
  if (error) return callback({ status: 400, message: error });

  ingredientModel.increaseQuantity(id, quantity, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });

    if (result.affectedRows === 0) {
      return callback({ status: 404, message: "Không tìm thấy nguyên liệu" });
    }

    callback(null, {
      status: 200,
      message: "Tăng số lượng thành công"
    });
  });
};


exports.decreaseQuantity = (id, quantity, callback) => {
  // validate số lượng
  const error = validateNumber("Số lượng giảm", quantity);
  if (error) return callback({ status: 400, message: error });

  ingredientModel.decreaseQuantity(id, quantity, (err, result) => {
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

exports.deleteIngredient = (id, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  ingredientModel.deleteIngredient(id, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa nguyên liệu thành công"
    });
  });
};