const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// GET /api/users
router.get('/', userController.getAllUsers);

// POST /api/users
router.post('/', userController.createUser);

module.exports = router;
