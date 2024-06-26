const express = require('express');
const router = express.Router();
const AccessController = require('../controllers/access.controller');

router.post('/login', AccessController.login);
router.post('/register', AccessController.register);


module.exports = router;