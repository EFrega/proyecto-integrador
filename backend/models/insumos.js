// models/Insumo.js
module.exports = (sequelize, DataTypes) => {
    const Insumo = sequelize.define('Insumos', {
      idInsumo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
      },
      cantidadMinima: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      cantidadExistente: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      descripcion: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      observaciones: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      baja: {
        type: INTEGER(1),
        allowNull: false,
        defaultValue: 0
      }
    }, {
      // Opciones adicionales del modelo
      tableName: 'insumos', // El nombre de la tabla en la base de datos
      timestamps: false, // Si no usas las columnas createdAt y updatedAt
    });

    return Insumo;
};
