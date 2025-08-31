const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/customer/nextid
router.get('/nextid', authenticateToken.authenticateToken, customerController.getNextCustomerId);

// GET /api/customer
router.get('/', authenticateToken.authenticateToken, customerController.getAllCustomers);

// GET /api/customer/search?keyword=abc
router.get('/search', authenticateToken.authenticateToken, customerController.searchCustomer);

// POST /api/customer
router.post('/', authenticateToken.authenticateToken, customerController.addCustomer);

// PUT /api/customer/update/:id
router.put('/update/:id', authenticateToken.authenticateToken, customerController.updateCustomer);

// PUT /api/customer/delete/:id
router.put('/delete/:id', authenticateToken.authenticateToken, customerController.deleteCustomer);

// GET /api/customer/:id
router.get('/:id', authenticateToken.authenticateToken, customerController.getCustomerById);

module.exports = router;