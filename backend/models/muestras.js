// models/Muestra.js

module.exports = (sequelize, DataTypes) => {
    const Muestra = sequelize.define('Muestras', {
        idMuestra: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPaciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        idResultado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rotulo: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }, {
      // Opciones del modelo
      tableName: 'muestras', // Definimos explícitamente el nombre de la tabla
      timestamps: false, // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    // Relaciones con otras tablas
    Muestra.associate = function(models) {
        // Relación con la tabla Paciente
        Muestra.belongsTo(models.Pacientes, { foreignKey: 'idPaciente', as: 'paciente' });
        // Relación con la tabla Resultado
        Muestra.belongsTo(models.Resultados, { foreignKey: 'idResultado', as: 'resultado' });
    };

    return Muestra;
};
