// models/HistoriaClinica.js
module.exports = (sequelize, DataTypes) => {
    const HistoriaClinica = sequelize.define('HistoriaClinica', {
      // Definición de los atributos de la tabla
        idHistoriaClinica: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idEstudio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idResultado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        observacion: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        derivadoDesde: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        derivadoHacia: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
    }, {
      // Opciones del modelo
        tableName: 'historias_clinicas',
        timestamps: false, // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    // Relaciones con otras tablas
    HistoriaClinica.associate = (models) => {
        HistoriaClinica.belongsTo(models.Estudio, {
            foreignKey: 'idEstudio',
            as: 'estudio', // Alias para acceder a la relación
        });

        HistoriaClinica.belongsTo(models.Servicio, {
            foreignKey: 'idServicio',
            as: 'servicio', // Alias para acceder a la relación
        });

        HistoriaClinica.belongsTo(models.Resultado, {
            foreignKey: 'idResultado',
            as: 'resultado', // Alias para acceder a la relación
        });
    };

    return HistoriaClinica;
};
