const catalogModel = require('../models/catalog.model');

exports.getAllCatalogs = (callback) => {
  catalogModel.getAllCatalogs(callback);
};

exports.getCatalogById = (id, callback) => {
  catalogModel.getCatalogById(id, callback);
};

exports.getNextCatalogId = (callback) => {
  catalogModel.getLastCatalogId((err, lastId) => {
    if (err) return callback(err);

    let newId = "LDM00001";
    if (lastId) {
      const num = parseInt(lastId.replace("LDM", "")) + 1;
      newId = "LDM" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.searchCatalog = (keyword, callback) => {
  catalogModel.searchCatalog(keyword, callback);
}

exports.addCatalog = (data, callback) => {
  const { MaLDM, TenLDM } = data;

  // Validation: không để trống
  if (!TenLDM) {
    return callback({ message: "Tên loại danh mục không được để trống" });
  }

  catalogModel.addCatalog({ MaLDM, TenLDM }, (err, result) => {
    if (err) return callback(err);
    callback(null, {
      success: true,
      message: "Thêm loại danh mục thành công",
      data: { MaLDM, TenLDM }
    });
  });
};

exports.updateCatalog = (id, data, callback) => {
  const { TenLDM } = data;

  // Validation: không để trống
  if (!TenLDM) {
    return callback({ message: "Tên loại danh mục không được để trống" });
  }

  catalogModel.updateCatalog(id, { TenLDM }, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy loại danh mục
    }
    callback(null, {
      success: true,
      message: "Cập nhật loại danh mục thành công",
      data: { MaLDM: id, TenLDM }
    });
  });
};

exports.deleteCatalog = (id, callback) => {
  // Xóa mềm -> cập nhật IsDeleted = 1
  catalogModel.deleteCatalog(id, (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(null, null); // Không tìm thấy
    }
    callback(null, {
      success: true,
      message: "Xóa loại danh mục thành công"
    });
  });
};
