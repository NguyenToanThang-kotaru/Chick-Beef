const express = require('express');
const router = express.Router();
const PermissionDetailsController = require('../controllers/permissionDetails.controller');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/:id/details', authenticateToken.authenticateToken, PermissionDetailsController.getAllPermissionDetailsByPermissionId);

router.get('/:id/features', authenticateToken.authenticateToken, PermissionDetailsController.getFeatureIdsByPermissionId);

router.get('/:id/actions', authenticateToken.authenticateToken, PermissionDetailsController.getActionIdsByPermissionId);

router.post('/', authenticateToken.authenticateToken, PermissionDetailsController.addPermissionDetail);

router.put('/active', authenticateToken.authenticateToken, PermissionDetailsController.activePermissionDetail);

router.put('/inactive', authenticateToken.authenticateToken, PermissionDetailsController.inactivePermissionDetail);

module.exports = router;
