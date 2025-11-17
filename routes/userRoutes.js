const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rute 1: Untuk Tombol "Generate API Key"
router.post('/generate-key-only', userController.generateKeyOnly); 

// Rute 2: Untuk Tombol "Save Data"
router.post('/save-key', userController.saveUserDataAndKey);

module.exports = router;