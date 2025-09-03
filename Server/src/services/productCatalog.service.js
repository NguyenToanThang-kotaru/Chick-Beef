const productCatalogModel = require('../models/productCatalog.model');

exports.getAllProductCatalogs = (callback) => {
  productCatalogModel.getAllProductCatalogs(callback)
};

exports.getProductCatalogByProductId = (id, callback) => {
  productCatalogModel.getProductCatalogByProductId(id, callback);
};

exports.getProductCatalogByCatalogId = (id, callback) => {
  productCatalogModel.getProductCatalogByCatalogId(id, callback);
};

exports.addProductCatalog = (data, callback) => {
  const { MaSP, MaLDM} = data;

  // Kiểm tra dữ liệu trống
  if (!MaSP || !MaLDM) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  // Thêm công thức vào DB
  const productCatalogData = { MaSP, MaLDM};
  productCatalogModel.addProductCatalog(productCatalogData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, productCatalogData); // trả dữ liệu công thức mới
  });
};
