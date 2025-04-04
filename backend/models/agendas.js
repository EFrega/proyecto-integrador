// models/Agenda.js

module.exports = (sequelize, DataTypes) => {
    const Agenda = sequelize.define('Agendas', {
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
        tableName: 'agendas', // Definimos explícitamente el nombre de la tabla
        timestamps: false, // No necesitamos los campos createdAt y updatedAt
    });

    // Relaciones con otras tablas
    Agenda.associate = function(models) {
        // Relación con la tabla Profesional
        Agenda.belongsTo(models.Profesionales, { foreignKey: 'idProfesional', as: 'profesional' });
    
        // Relación con la tabla Consultorio
        Agenda.belongsTo(models.Consultorios, { foreignKey: 'idConsultorio', as: 'consultorio' });
    
        // Relación con la tabla Servicio
        Agenda.belongsTo(models.Servicios, { foreignKey: 'idServicio', as: 'servicio' });
    };

    return Agenda;
};
