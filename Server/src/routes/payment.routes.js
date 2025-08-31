const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/payment/nextid
router.get('/nextid', authenticateToken.authenticateToken, paymentController.getNextPaymentId);

// GET /api/payment
router.get('/', authenticateToken.authenticateToken, paymentController.getAllPayments);

// GET /api/payment/search?keyword=abc
router.get('/search', authenticateToken.authenticateToken, paymentController.searchPayment);

// POST /api/payment
router.post('/', authenticateToken.authenticateToken, paymentController.addPayment);

// GET /api/payment/:id
router.get('/:id', authenticateToken.authenticateToken, paymentController.getPaymentById);

module.exports = router;