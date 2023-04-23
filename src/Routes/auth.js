const express = require('express');

const router = express.Router();

const authController = require('../Controllers/auth');

router.post('/register', authController.register);

module.exports = router;