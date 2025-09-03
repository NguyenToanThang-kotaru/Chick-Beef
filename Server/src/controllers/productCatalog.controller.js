const productCatalogService = require("../services/productCatalog.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllProductCatalogs = (req, res) => {
    productCatalogService.getAllProductCatalogs((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getProductCatalogByProductId = (req, res) => {
  const id = req.params.id;

  productCatalogService.getProductCatalogByProductId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.length === 0) return res.status(404).json({ message: "Không tìm thấy danh mục sản phẩm" });
    res.json(result);
  });
};

exports.getProductCatalogByCatalogId = (req, res) => {
  const id = req.params.id;

  productCatalogService.getProductCatalogByCatalogId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.length === 0) return res.status(404).json({ message: "Không tìm thấy danh mục sản phẩm" });
    res.json(result);
  });
};

exports.addProductCatalog = (req, res) => {
  const productCatalogData = req.body;

  productCatalogService.addProductCatalog(productCatalogData, (err, result) => {
    if (err) {
      if (err.status === 400) {
        // Validation lỗi → trả 200, success=false
        return res.json({ success: false, message: err.message });
      }
      // Lỗi khác vẫn throw status
      const status = err.status || 500;
      return res.status(status).json({ error: { message: err.message } });
    }
    res.status(201).json({ success: true, message: "Thêm chi tiết danh mục sản phẩm thành công", productCatalog: result });
  });
};
