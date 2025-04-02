const express = require('express');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models/usuarios');  // Asegúrate de que el modelo Usuario esté importado correctamente
const router = express.Router();

// Ruta para el login
router.post('/', async (req, res) => {
    const { usuario, contrasena } = req.body;

    try {
        const usuarioDb = await Usuario.findOne({ where: { usuario } });

        if (!usuarioDb) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Comparamos la contraseña proporcionada con la almacenada en la base de datos
        const isMatch = await usuarioDb.comparePassword(contrasena);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Generamos el token JWT
        const token = jwt.sign(
            { id: usuarioDb.idUsuario, usuario: usuarioDb.usuario },
            'tu_clave_secreta', // Asegúrate de mantener esta clave secreta segura
            { expiresIn: '1h' }  // El token expira en una hora
        );

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = router;
