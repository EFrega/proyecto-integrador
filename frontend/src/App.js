import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/login/login';  // Importa el componente Login

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
    <div className="App">
      {/* Si el usuario está logueado, mostramos el mensaje o lo que quieras */}
      {isLoggedIn ? (
        <div>
          <h1>Bienvenido, ¡estás logueado!</h1>
          <h2>{message}</h2> {/* Muestra el mensaje que se obtiene del servidor */}
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />  // Pasa el handler para login exitoso
      )}
    </div>
  );
}

export default App;
