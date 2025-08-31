const express = require('express');
const router = express.Router();
const importController = require('../controllers/import.controller');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/import/nextid
router.get('/nextid', importController.getNextImportId);

// GET /api/import
router.get('/', importController.getAllImports);

// GET /api/import/:id
router.get('/:id', importController.getImportById);

//GET /api/import/:id
router.get('/month/:year/:month',importController.getImportsByMonth);

// PUT /api/import/update/:id
router.put('/update/:id', importController.updateStatusImport);

// POST /api/import
router.post('/', importController.addImport);

module.exports = router;