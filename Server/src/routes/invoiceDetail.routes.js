const express = require('express');
const router = express.Router();
const invoiceDetailController = require('../controllers/invoiceDetail.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/invoiceDetail (lấy tất cả)
router.get('/', authenticateToken.authenticateToken, invoiceDetailController.getAllInvoiceDetails);

// GET /api/invoiceDetail/:id (lấy theo id)
router.get('/:id', authenticateToken.authenticateToken, invoiceDetailController.getInvoiceDetailByInvoiceId);

// POST /api/invoiceDetail (thêm mới)
router.post('/', authenticateToken.authenticateToken, invoiceDetailController.addInvoiceDetail);

exports = module.exports = router;