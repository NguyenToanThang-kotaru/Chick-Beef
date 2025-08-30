const productService = require("../services/product.service");

exports.countProduct = (req, res) => {
    productService.countProduct(req, res);
}