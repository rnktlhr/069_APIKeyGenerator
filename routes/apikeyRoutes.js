// File: routes/apikeyRoutes.js

const express = require('express');
const router = express.Router();
const apiKeyController = require('../controllers/apiKeyController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware otentikasi JWT

// Rute DELETE untuk menonaktifkan API Key berdasarkan ID
// Endpoint ini diakses sebagai DELETE /api/apikey/:id
// Hanya Admin yang bisa mengakses (dijaga oleh authMiddleware)
router.delete('/:id', authMiddleware, apiKeyController.deleteApiKey);

module.exports = router;