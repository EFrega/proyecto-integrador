// models/Horario.js

module.exports = (sequelize, DataTypes) => {
    const Horario = sequelize.define('Horarios', {
        idProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        turno: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
      // Opciones del modelo
      tableName: 'horarios', // Definimos explícitamente el nombre de la tabla
      timestamps: false, // No necesitamos los campos createdAt y updatedAt
    });

    // Relaciones con otras tablas
    Horario.associate = function(models) {
        // Relación con la tabla Profesional
        Horario.belongsTo(models.Profesionales, { foreignKey: 'idProfesional', as: 'profesional' });
    };

    return Horario;
};
