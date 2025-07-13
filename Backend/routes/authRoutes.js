const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { signup } = require('../authController.js');

router.post('/signup', upload.fields([{ name: 'profileImage' }, { name: 'coverImage' }]), signup);

module.exports = router;
