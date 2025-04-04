// models/Pago.js

module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define('Pagos', {
        idPaciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idObraSocial: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        importe: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        factura: {
            type: DataTypes.STRING(50),
            allowNull: true // Suponiendo que no siempre será obligatorio
        }
    }, {
        // Opciones del modelo
        tableName: 'pagos', // Definimos explícitamente el nombre de la tabla
        timestamps: false, // No necesitamos los campos createdAt y updatedAt
    });

    // Relaciones con otras tablas
    Pago.associate = function(models) {
        // Relación con la tabla Paciente
        Pago.belongsTo(models.Pacientes, { foreignKey: 'idPaciente', as: 'paciente' });
    
        // Relación con la tabla Servicio
        Pago.belongsTo(models.Servicios, { foreignKey: 'idServicio', as: 'servicio' });
    
        // Relación con la tabla Obra Social
        Pago.belongsTo(models.ObrasSociales, { foreignKey: 'idObraSocial', as: 'obraSocial' });
    };

    return Pago;
};
