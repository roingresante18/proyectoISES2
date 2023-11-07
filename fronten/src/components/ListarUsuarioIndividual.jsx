import React, { useState } from 'react';
import axios from 'axios'; 

import Navegador from "./Navegador";
const Appp = () => {
  const [searchId, setSearchId] = useState('');
  const [foundUser, setFoundUser] = useState(null);

  const handleSearch = () => {
  
    axios.get(`http://localhost:3000/api/v1/users/${searchId}`)
      .then(response => {
        if (response.data) {
          setFoundUser(response.data);
          console.log(response.data);
        } else {
          setFoundUser(null);
        }
      })
      .catch(error => {
        console.error(error);
        setFoundUser(null);
      });
  };

  return (
    <>
    <Navegador />
    <div>
      <input
        type="text"
        placeholder="Ingrese el ID del usuario"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {foundUser ? (
        <div>
          <h3>Usuario Encontrado:</h3>
          <p>ID: {foundUser.id_usuario}</p>
          <p>Nombre: {foundUser.nombre}</p>
          <p>apellido: {foundUser.apellido}</p>
          <p>DNI: {foundUser.dni}</p>
        </div>
      ) : (
        <p>Usuario no encontrado</p>
      )}
    </div>
    </>
  );
};

export default Appp;
