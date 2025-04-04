// models/Paciente.js
module.exports = (sequelize, DataTypes) => {
    const Paciente = sequelize.define('Pacientes', {
      // Definición de los atributos de la tabla
        idPaciente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idFichaMedica: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        dni: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        domicilio: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        obraSocial: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        prioridad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
      // Opciones del modelo
        tableName: 'pacientes',
        timestamps: false, // Si no tienes las columnas `createdAt` y `updatedAt`
    });

    // Relaciones con otras tablas
    Paciente.associate = (models) => {
      // Relación con la tabla FichasMedicas
        Paciente.belongsTo(models.FichasMedicas, {
            foreignKey: 'idFichaMedica',
            as: 'fichaMedica',
        });

      // Relación con la tabla Usuarios
        Paciente.belongsTo(models.Usuarios, {
            foreignKey: 'idUsuario',
            as: 'usuario',
        });
    };

    return Paciente;
};
