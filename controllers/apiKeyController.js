// File: controllers/apiKeyController.js

const { ApiKey } = require('../models'); 

module.exports = {
    // Fungsi yang benar untuk soft delete (Menonaktifkan kunci)
    async deleteApiKey(req, res) {
        try {
            const { id } = req.params;
            
            // Gunakan Sequelize.update() untuk soft delete (mengubah isActive menjadi false)
            const result = await ApiKey.update(
                { isActive: false }, 
                { where: { id: id } }
            );

            // Sequelize.update() mengembalikan array, elemen pertama adalah jumlah baris yang diupdate
            if (result[0] === 0) {
                return res.status(404).json({ message: 'API Key tidak ditemukan.' });
            }

            res.json({ message: 'API Key berhasil dinonaktifkan.' });
        } catch (err) {
            console.error('Error deleting API Key:', err);
            res.status(500).json({ message: 'Gagal menghapus API Key.' });
        }
    }
    
    // Catatan: Fungsi getAllApiKeys tidak diperlukan di sini.
    // Fungsi getAllApiKeys (yang benar) berada di adminController.js.
};
