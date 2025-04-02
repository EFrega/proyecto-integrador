const { Sequelize } = require('sequelize');

// Crear la instancia de Sequelize
const sequelize = new Sequelize('proyectointegrador', 'root', 'Sabbah2505', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;  // Exportamos la instancia de sequelize
