// models/Estudio.js
module.exports = (sequelize, DataTypes) => {
    const Estudio = sequelize.define('Estudios', {
      // Definición de los atributos de la tabla
        idEstudio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
        },
        fechaHora: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        prioridad: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }, {
      // Opciones del modelo (opcional)
        tableName: 'estudios',
        timestamps: false, // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    return Estudio;
};
