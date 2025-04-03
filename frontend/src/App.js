import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login/login';  // Importa el componente Login
import Registro from './components/registro/registro';  // Importa el componente Registro

function App() {
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Estado para gestionar si el usuario está logueado

  useEffect(() => {
    // Esta parte es opcional, depende de si quieres mostrar un mensaje del servidor
    axios.get('http://localhost:5000')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.log('Hubo un error al conectarse con el servidor:', error);
      });
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);  // Cambia el estado a "logueado"
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Iniciar sesión</Link>  {/* Enlace a la página de login */}
            </li>
            <li>
              <Link to="/registro">Registrarse</Link>  {/* Enlace a la página de registro */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route 
            path="/login" 
            element={<Login onLoginSuccess={handleLoginSuccess} />}  // Pasa el handler para login exitoso
          />
          <Route 
            path="/registro" 
            element={<Registro />}  // Aquí puedes poner el componente de Registro
          />
        </Routes>

        {/* Si el usuario está logueado, mostramos el mensaje o lo que quieras */}
        {isLoggedIn && (
          <div>
            <h1>Bienvenido, ¡estás logueado!</h1>
            <h2>{message}</h2> {/* Muestra el mensaje que se obtiene del servidor */}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
