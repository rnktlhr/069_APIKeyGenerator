const { DataTypes } = require('sequelize');
const path = require('path');
const fs = require('fs');

// !!! PERBAIKAN KRITIS: Mengimpor instance Sequelize yang sudah diinisialisasi !!!
// Kita tidak perlu proses config loading karena sudah dilakukan di config/database.js.
const sequelize = require('../config/database'); 
const db = {};

// Membaca dan menginisialisasi semua model di folder ini secara dinamis
const files = fs
    .readdirSync(__dirname)
    .filter(file => {
        // Memastikan hanya file .js yang bukan index.js
        return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js');
    });

for (const file of files) {
    // Meneruskan instance 'sequelize' yang sudah diimpor ke setiap definisi model
    const modelDefinition = require(path.join(__dirname, file));
    const model = modelDefinition(sequelize, DataTypes); 
    db[model.name] = model;
}

// Menjalankan asosiasi
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = sequelize.Sequelize; // Mengambil Class Sequelize dari instance

db.Admin = db.Admin;
db.User = db.User; 
db.ApiKey = db.ApiKey;

module.exports = db;