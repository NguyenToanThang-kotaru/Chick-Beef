const catalogService = require("../services/catalog.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllCatalogs = (req, res) => {
    catalogService.getAllCatalogs((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getCatalogById = (req, res) => {
  const id = req.params.id;

  catalogService.getCatalogById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy loại danh mục" });
    res.json(result);
  });
};

exports.getNextCatalogId = (req, res) => {
  catalogService.getNextCatalogId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.searchCatalog = (req, res) => {
  const keyword = req.query.keyword || "";

  catalogService.searchCatalog(keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addCatalog = (req, res) => {
  const catalogData = req.body;

  catalogService.addCatalog(catalogData, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Thêm loại danh mục thành công", catalog: result });
  });
};

exports.updateCatalog = (req, res) => {
  const id = req.params.id;              // lấy id từ URL
  const catalogData = req.body;

  catalogService.updateCatalog(id, catalogData, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy loại danh mục" });

    res.status(200).json({ message: "Sửa loại danh mục thành công", catalog: result });
  });
};

exports.deleteCatalog = (req, res) => {
  const id = req.params.id;

  catalogService.deleteCatalog(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy loại danh mục" });

    res.json({ message: "Xóa loại danh mục thành công" });
  });
};