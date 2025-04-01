// models/Resultado.js
module.exports = (sequelize, DataTypes) => {
    const Resultado = sequelize.define('Resultado', {
      // Definición de los atributos de la tabla
        idResultado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idEstudio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        muestra: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        comprobanteRetiro: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        }, {
        // Opciones del modelo (opcional)
        tableName: 'resultados',
        timestamps: false, // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    // Relación con la tabla `estudios`
    Resultado.associate = (models) => {
        Resultado.belongsTo(models.Estudio, {
            foreignKey: 'idEstudio',
            as: 'estudio', // Alias para acceder a la relación
        });
    };

    return Resultado;
};