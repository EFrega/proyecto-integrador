// models/Profesional.js
module.exports = (sequelize, DataTypes) => {
    const Profesional = sequelize.define('Profesional', {
        idProfesional: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'servicios', // Relación con la tabla servicios
                key: 'idServicio'
            }
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        domicilio: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        numeroMatricula: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        horarioIngreso: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        horarioEgreso: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        inicioActividad: {
            type: DataTypes.DATEONLY, // Para la fecha, DATEONLY es el tipo adecuado
            allowNull: true
        },
        finActividad: {
            type: DataTypes.DATE, // DATETIME para fecha y hora
            allowNull: true,
            defaultValue: null
        }
    }, {
      // Opciones adicionales del modelo
      tableName: 'profesionales',  // El nombre de la tabla en la base de datos
      timestamps: false, // Si no usas las columnas createdAt y updatedAt
    });

    // Relaciones (FK)
    Profesional.associate = (models) => {
      // Relación con el modelo 'Servicio'
        Profesional.belongsTo(models.Servicio, {
        foreignKey: 'idServicio',
        as: 'servicio'
        });
    };

    return Profesional;
};
