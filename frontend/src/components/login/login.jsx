import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar que el formulario recargue la página
        console.log("Formulario enviado"); // Esto debería aparecer en la consola

        try {
        // Realizamos la solicitud POST al backend para autenticar al usuario
        const response = await axios.post('http://localhost:5000/login', {
            usuario,
            contrasena,
        });

        // Si la autenticación es exitosa, guardamos el token en localStorage
        localStorage.setItem('token', response.data.token);

        // Mostrar un pop-up de éxito
        alert('¡Login exitoso!');

        // Limpiar los campos de entrada
        setUsuario('');
        setContrasena('');
        setError('');

        } catch (err) {
            if (err.response && err.response.data) {
                // Si hay un error en la respuesta del servidor, mostramos el mensaje de error
                setError(err.response.data.message);
            } else {
                // Si el error es otro (como no poder hacer la solicitud)
                setError('Error en la autenticación');
            }
        }
    };


return (
    <div className="login-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Usuario</label>
            <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Contraseña</label>
            <input
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
            />
            </div>
            {error && <p className="error">{error}</p>} {/* Mostrar error si lo hay */}
            <div>
            <button type="submit">Iniciar sesión</button>
            </div>
        </form>
        </div>
    );
};

export default Login;
