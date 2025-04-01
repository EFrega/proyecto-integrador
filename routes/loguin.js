// server.js
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     // Cambia por tu usuario de MySQL
    password: '',     // Cambia por tu contraseña de MySQL
    database: 'proyectointegrador'  // Cambia por tu base de datos
});

const app = express();
app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON
app.use(cors()); // Habilitar CORS para que el frontend en React pueda hacer peticiones

// Ruta para el login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

// Consultar si el usuario existe en la base de datos
db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).send('Error en el servidor');
    
    if (results.length === 0) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
    }
    
    const user = results[0];

    // Comparar la contraseña con bcrypt
    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).send('Error al comparar contraseñas');
        
        if (isMatch) {
            // Generar un token JWT
            const token = jwt.sign({ id: user.id, username: user.username }, 'secreto', { expiresIn: '1h' });
            
            // Enviar el token y el mensaje de éxito
            res.json({
            message: 'Login exitoso',
            token: token
            });
            } else {
                return res.status(400).json({ message: 'Contraseña incorrecta' });
            }
        });
    });
});

// Iniciar servidor
app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
