// models/Informe.js

module.exports = (sequelize, DataTypes) => {
    const Informe = sequelize.define('Informe', {
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
        Informe.belongsTo(models.Profesional, { foreignKey: 'idProfesional', as: 'profesional' });
        Informe.belongsTo(models.Paciente, { foreignKey: 'idPaciente', as: 'paciente' });
        Informe.belongsTo(models.Estudio, { foreignKey: 'idEstudio', as: 'estudio' });
        Informe.belongsTo(models.Resultado, { foreignKey: 'idResultado', as: 'resultado' });
    };

    return Informe;
};
