// models/Administrativo.js
module.exports = (sequelize, DataTypes) => {
    const Administrativo = sequelize.define('Administrativo', {
      // Definición de los atributos de la tabla
        idAdministrativo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        domicilio: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        horarioLaboral: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }, {
      // Opciones del modelo (opcional)
        tableName: 'administrativos',
        timestamps: false,  // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    return Administrativo;
};
