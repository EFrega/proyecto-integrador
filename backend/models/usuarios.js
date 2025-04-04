// models/Usuario.js
const bcrypt = require('bcryptjs');  // Necesitamos bcrypt para cifrar y comparar contraseñas

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuarios', {
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
    hooks: {
      // Hook para cifrar la contraseña antes de crear o actualizar el usuario
      beforeCreate: async (usuario) => {
        if (usuario.contrasena) {
          usuario.contrasena = await bcrypt.hash(usuario.contrasena, 10); // Cifra la contraseña antes de guardarla
        }
      },
      beforeUpdate: async (usuario) => {
        if (usuario.contrasena) {
          usuario.contrasena = await bcrypt.hash(usuario.contrasena, 10); // Cifra la contraseña antes de actualizarla
        }
      }
    }
  });

  // Método de instancia para comparar contraseñas
  Usuario.prototype.comparePassword = async function(contrasena) {
    return bcrypt.compare(contrasena, this.contrasena);  // Compara la contraseña proporcionada con la almacenada
  };

  return Usuario;
};
