// models/Servicio.js
module.exports = (sequelize, DataTypes) => {
    const Servicio = sequelize.define('Servicio', {
        idServicio: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: {
          type: DataTypes.STRING(100),
          allowNull: true // Si el nombre puede ser nulo, cambia a true
        },
        tiempo: {
          type: DataTypes.INTEGER,
          allowNull: true // Si el tiempo puede ser nulo, cambia a true
        },
        horarioInicio: {
          type: DataTypes.INTEGER,
          allowNull: true // Si el horarioInicio puede ser nulo, cambia a true
        },
        horarioFin: {
          type: DataTypes.INTEGER,
          allowNull: true // Si el horarioFin puede ser nulo, cambia a true
        },
        precio: {
          type: DataTypes.FLOAT,
          allowNull: true // Si el precio puede ser nulo, cambia a true
        }
    }, {
      // Opciones adicionales del modelo
      tableName: 'servicios',  // El nombre de la tabla en la base de datos
      timestamps: false // Si no usas las columnas createdAt y updatedAt
    });

    return Servicio;
};
