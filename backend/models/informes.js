// models/Informe.js

module.exports = (sequelize, DataTypes) => {
    const Informe = sequelize.define('Informes', {
        idInformes: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idPaciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEstudio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idResultado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        observacion: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }, {
        // Opciones del modelo
        tableName: 'informes', // Definimos explícitamente el nombre de la tabla
        timestamps: false, // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    // Relaciones con otras tablas
    Informe.associate = function(models) {
        // Definimos las relaciones con las otras tablas
        Informe.belongsTo(models.Profesionales, { foreignKey: 'idProfesional', as: 'profesional' });
        Informe.belongsTo(models.Pacientes, { foreignKey: 'idPaciente', as: 'paciente' });
        Informe.belongsTo(models.Estudios, { foreignKey: 'idEstudio', as: 'estudio' });
        Informe.belongsTo(models.Resultados, { foreignKey: 'idResultado', as: 'resultado' });
    };

    return Informe;
};
