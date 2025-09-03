const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplier.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/supplier/nextid
router.get('/nextid', authenticateToken.authenticateToken, supplierController.getNextSupplierId);

// GET /api/supplier
router.get('/', authenticateToken.authenticateToken, supplierController.getAllSuppliers);

// GET /api/supplier/search?keyword=abc
router.get('/search', authenticateToken.authenticateToken, supplierController.searchSupplier);

// POST /api/supplier
router.post('/', authenticateToken.authenticateToken, supplierController.addSupplier);

// PUT /api/supplier/update/:id
router.put('/update/:id', authenticateToken.authenticateToken, supplierController.updateSupplier);

// PUT /api/supplier/delete/:id
router.put('/delete/:id', authenticateToken.authenticateToken, supplierController.deleteSupplier);

// GET /api/supplier/:id
router.get('/:id', authenticateToken.authenticateToken, supplierController.getSupplierById);

module.exports = router;