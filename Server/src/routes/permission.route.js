const express = require('express');
const router = express.Router();
const PermissionController = require('../controllers/permission.controller');
const authenticateToken = require('../middleware/authMiddleware');


//router.get('/nextid', authenticateToken.authenticateToken, PermissionController.getNextPermissonId);

router.get('/', authenticateToken.authenticateToken, PermissionController.getAllPermission);

router.get('/:id', authenticateToken.authenticateToken, PermissionController.getPermissionById);

router.post('/', authenticateToken.authenticateToken, PermissionController.addPermission);

router.put('/update/:id', authenticateToken.authenticateToken, PermissionController.updatePermission);

router.put('/delete/:id', authenticateToken.authenticateToken, PermissionController.deletePermission);

module.exports = router;