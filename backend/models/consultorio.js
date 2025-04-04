// models/Consultorio.js
module.exports = (sequelize, DataTypes) => {
    const Consultorio = sequelize.define('Consultorio', {
      // Definición de los atributos de la tabla
        idConsultorio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idInsumo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fechaHoraIngreso: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechaHoraEgreso: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
      // Opciones del modelo (opcional)
    tableName: 'consultorios',
    timestamps: false,  // Si no hay campos `createdAt` y `updatedAt` en la tabla
    });

    // Relaciones
    Consultorio.associate = (models) => {
        Consultorio.belongsTo(models.Profesional, {
            foreignKey: 'idProfesional',
            as: 'profesional',
        });

        Consultorio.belongsTo(models.Insumo, {
            foreignKey: 'idInsumo',
            as: 'insumo',
        });

      // Si necesitas también la relación con el servicio:
        Consultorio.belongsTo(models.Servicio, {
            foreignKey: 'idServicio',
            as: 'servicio',
        });
    };

    return Consultorio;
};
