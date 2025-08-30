const productModel = require('../models/product.model');

exports.countProduct = (req, res) => {
    productModel.countProduct((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Lỗi server', error: err });
        }
        res.json(results);
    });
};