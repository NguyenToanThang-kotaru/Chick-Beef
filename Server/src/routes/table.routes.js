const express = require('express');
const router = express.Router();
const tableController = require('../controllers/table.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/table/nextid
router.get('/nextid', authenticateToken.authenticateToken, tableController.getNextTableId);

// GET /api/table
router.get('/', authenticateToken.authenticateToken, tableController.getAllTables);

// GET /api/table/search?keyword=abc
router.get('/search', authenticateToken.authenticateToken, tableController.searchTable);

// POST /api/table
router.post('/', authenticateToken.authenticateToken, tableController.addTable);

// PUT /api/table/update/:id
router.put('/update/:id', authenticateToken.authenticateToken, tableController.updateTable);

// PUT /api/table/delete/:id
router.put('/delete/:id', authenticateToken.authenticateToken, tableController.deleteTable);

// GET /api/table/:id
router.get('/:id', authenticateToken.authenticateToken, tableController.getTableById);

module.exports = router;