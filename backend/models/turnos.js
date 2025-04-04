// models/Turno.js

module.exports = (sequelize, DataTypes) => {
    const Turno = sequelize.define('Turnos', {
        idTurno: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idConsultorio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idPaciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fechaHora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sobreturno: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        acreditado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
      // Opciones del modelo
      tableName: 'turnos', // Definimos explícitamente el nombre de la tabla
      timestamps: false, // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    // Relaciones con otras tablas
    Turno.associate = function(models) {
        // Relación con la tabla Profesional
        Turno.belongsTo(models.Profesionales, { foreignKey: 'idProfesional', as: 'profesional' });
        // Relación con la tabla Consultorio
        Turno.belongsTo(models.Consultorios, { foreignKey: 'idConsultorio', as: 'consultorio' });
        // Relación con la tabla Servicio
        Turno.belongsTo(models.Servicios, { foreignKey: 'idServicio', as: 'servicio' });
        // Relación con la tabla Paciente
        Turno.belongsTo(models.Pacientes, { foreignKey: 'idPaciente', as: 'paciente' });
    };

    return Turno;
};
