const recipeModel = require('../models/recipe.model');
const { validatePositiveNumber } = require("./validation");

exports.getAllRecipes = (callback) => {
  recipeModel.getAllRecipes(callback)
};

exports.getRecipeByProductId = (id, callback) => {
  recipeModel.getRecipeByProductId(id, callback);
};

exports.searchRecipe = (keyword, callback) => {
  recipeModel.searchRecipe(keyword, callback);
};

exports.addRecipe = (data, callback) => {
  const { MaSP, MaNL, DinhLuongNL} = data;

  // Kiểm tra dữ liệu trống
  if (!MaSP || !MaNL || !DinhLuongNL ) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validatePositiveNumber("Định lượng", DinhLuongNL);
  if (error) 
    return callback({ status: 400, message: error });

  // Thêm công thức vào DB
  const recipeData = { MaSP, MaNL, DinhLuongNL};
  recipeModel.addRecipe(recipeData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, recipeData); // trả dữ liệu công thức mới
  });
};


exports.updateRecipe = (id, data, callback) => {
  const {MaSP, MaNL, DinhLuongNL} = data;

  // Kiểm tra dữ liệu trống
  if (!MaSP || !MaNL || !DinhLuongNL ) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Validate dữ liệu
  const error = validatePositiveNumber("Định lượng", DinhLuongNL);
  if (error) 
    return callback({ status: 400, message: error });

  //  Dữ liệu update
  const recipeData = {MaSP, MaNL, DinhLuongNL};
  recipeModel.updateRecipe(id, recipeData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    if (result.affectedRows === 0) {
      return callback({ status: 404, message: "Không tìm thấy công thức" });
    }
    callback(null, {
      status: 200,
      message: "Cập nhật công thức thành công",
      data: { MaSP: id, ...recipeData }
    });
  });
};

exports.deleteRecipe = (id, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  recipeModel.deleteRecipe(id, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa công thức thành công"
    });
  });
};