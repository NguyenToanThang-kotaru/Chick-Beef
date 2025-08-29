const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/invoice/nextid
router.get('/nextid', authenticateToken.authenticateToken, invoiceController.getNextInvoiceId);

// GET /api/invoice
router.get('/', authenticateToken.authenticateToken, invoiceController.getAllInvoice);

// GET /api/invoice/:id
router.get('/:id', authenticateToken.authenticateToken, invoiceController.getInvoiceById);

//GET /api/invoice/:id
router.get('/month/:year/:month', authenticateToken.authenticateToken,invoiceController.getInvoicesByMonth);

// POST /api/invoice
router.post('/', authenticateToken.authenticateToken, invoiceController.addInvoice);

module.exports = router;