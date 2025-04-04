// models/FichaMedica.js
module.exports = (sequelize, DataTypes) => {
    const FichaMedica = sequelize.define('FichasMedicas', {
      // Definición de los atributos de la tabla
        idFichaMedica: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idHistoriaClinica: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        grupoSanguineo: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        observaciones: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    }, {
      // Opciones del modelo
        tableName: 'fichas_medicas',
        timestamps: false, // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    // Relaciones con otras tablas
    FichaMedica.associate = (models) => {
        FichaMedica.belongsTo(models.HistoriasClinicas, {
            foreignKey: 'idHistoriaClinica',
            as: 'historiaClinica', // Alias para acceder a la relación
        });
    };

    return FichaMedica;
};
