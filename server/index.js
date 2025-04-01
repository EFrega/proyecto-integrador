const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const fs = require('fs'); // Importamos el módulo fs
const { Sequelize } = require('sequelize');

// Crea una aplicación de Express
const app = express();

// Habilitar CORS (si es necesario para la comunicación entre tu frontend y backend)
app.use(cors());

// Configura el servidor HTTP para usar con Socket.io
const server = http.createServer(app);
const io = socketIo(server);

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Servidor de gestión de turnos en funcionamiento!');
    logToFile('Se visitó la ruta principal ("/")');
});

// Conexión WebSocket
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');
    logToFile('Un usuario se ha conectado');
    
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
        logToFile('Un usuario se ha desconectado');
    });
});

// Configura el puerto del servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    logToFile(`Servidor corriendo en http://localhost:${PORT}`);
});

// Configuración de la base de datos MySQL
// Asegurate de verificar los datos propios
const sequelize = new Sequelize('proyectointegrador', 'root', '**********', {
    host: 'localhost',
    dialect: 'mysql',
});

// Verifica la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Conexión con la base de datos establecida correctamente.');
        logToFile('Conexión con la base de datos establecida correctamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
        logToFile(`No se pudo conectar a la base de datos: ${err}`);
    });

// Función para escribir en el archivo de log
function logToFile(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`; // Agrega la fecha y el mensaje
    fs.appendFile('logs.txt', logMessage, (err) => { // Escribe el mensaje en el archivo logs.txt
        if (err) {
            console.error('Error al escribir en el archivo de logs:', err); // Si hay un error, lo mostramos
        }
    });
}
