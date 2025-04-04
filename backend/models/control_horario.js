// models/ControlHorario.js

module.exports = (sequelize, DataTypes) => {
    const ControlHorario = sequelize.define('ControlHorario', {
        idProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fechaHoraIngreso: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaHoraEgreso: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
      // Opciones del modelo
      tableName: 'control_horario', // Definimos explícitamente el nombre de la tabla
      timestamps: false, // No necesitamos los campos createdAt y updatedAt
    });

    // Relaciones con otras tablas
    ControlHorario.associate = function(models) {
        // Relación con la tabla Profesional
        ControlHorario.belongsTo(models.Profesional, { foreignKey: 'idProfesional', as: 'profesional' });
    };

    return ControlHorario;
};
