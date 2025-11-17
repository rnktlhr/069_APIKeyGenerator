// File: models/ApiKey.js (Koreksi Final)

module.exports = (sequelize, DataTypes) => {
    const ApiKey = sequelize.define('ApiKey', {
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expiresAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 'standard'
        }
    }, {
        // >>> PERBAIKAN: SESUAIKAN NAMA TABEL DI DATABASE <<<
        tableName: 'api_keys' // Mengacu pada nama tabel Anda yang sebenarnya
    });

    ApiKey.associate = function(models) {
        ApiKey.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return ApiKey;
};