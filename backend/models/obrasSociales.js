// models/ObraSocial.js
module.exports = (sequelize, DataTypes) => {
    const ObraSocial = sequelize.define('ObrasSociales', {
      // Definición de los atributos de la tabla
        idObraSocial: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
      // Opciones del modelo (opcional)
        tableName: 'obras_sociales',
        timestamps: false,  // Si no hay columnas `createdAt` y `updatedAt`
    });

    return ObraSocial;
};
