const bcrypt = require('bcryptjs');
//const { sequelize } = require('./config/database');  // Asegúrate de importar correctamente la configuración de sequelize
const sequelize = require('./config/database');  // Asegúrate de que la ruta sea correcta
const Usuario = require('./models/usuarios');  // El modelo de Usuario

async function encryptPasswords() {
    try {
        
        // Obtén todos los usuarios de la base de datos
        const usuarios = await Usuario.findAll();

        for (let usuario of usuarios) {
            if (usuario.contrasena) {
                // Cifra la contraseña y actualiza el campo en la base de datos
                const hashedPassword = await bcrypt.hash(usuario.contrasena, 10);
                usuario.contrasena = hashedPassword;
                await usuario.save();
                console.log(`Contraseña de usuario ${usuario.usuario} cifrada correctamente.`);
            }
        }

        console.log('Todas las contraseñas han sido cifradas correctamente.');
    } catch (err) {
        console.error('Error al cifrar las contraseñas:', err);
    }
}

// Ejecuta la función para cifrar las contraseñas
sequelize.authenticate()
    .then(() => {
        console.log('Conexión con la base de datos establecida correctamente.');
        encryptPasswords();  // Llama a la función para cifrar las contraseñas
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });
