// models/Receta.js

module.exports = (sequelize, DataTypes) => {
    const Receta = sequelize.define('Receta', {
        idPaciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(50),
            allowNull: true // El campo puede ser opcional según tus necesidades
        }
    }, {
      // Opciones del modelo
      tableName: 'recetas', // Definimos explícitamente el nombre de la tabla
      timestamps: false, // No necesitamos los campos createdAt y updatedAt
    });

    // Relaciones con otras tablas
    Receta.associate = function(models) {
        // Relación con la tabla Paciente
        Receta.belongsTo(models.Paciente, { foreignKey: 'idPaciente', as: 'paciente' });
    
        // Relación con la tabla Profesional
        Receta.belongsTo(models.Profesional, { foreignKey: 'idProfesional', as: 'profesional' });
    };

    return Receta;
};
