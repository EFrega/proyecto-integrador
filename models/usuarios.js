// models/Usuario.js

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    // Opciones del modelo
    tableName: 'usuarios',  // Definimos explícitamente el nombre de la tabla
    timestamps: false, // No necesitamos las columnas createdAt y updatedAt
  });

  return Usuario;
};
