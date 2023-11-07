// import React, { useState } from "react";
// import axios from "axios";
// import { Button } from "@mui/material";
// import Navegador from "./Navegador";

// const App = () => {
//   const [searchId, setSearchId] = useState("");
//   const [foundUser, setFoundUser] = useState(null);
//   const [editedUser, setEditedUser] = useState({
//     id_usuario: "",
//     nombre: "",
//     apellido: "",
//     dni: "",
//   });
//   const [saveMessage, setSaveMessage] = useState(""); // Nuevo estado para el mensaje

//   const handleSearch = () => {
//     axios
//       .get(`http://localhost:3000/api/v1/users/${searchId}`)
//       .then((response) => {
//         if (response.data) {
//           setFoundUser(response.data);
//           setEditedUser(response.data); // Prellenar los campos de edición con los datos encontrados
//           console.log(response.data);
//         } else {
//           setFoundUser(null);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setFoundUser(null);
//       });
//   };

//   const handleSearch2 = () => {
//     axios
//       .delete(`http://localhost:3000/api/v1/users/${searchId}`)
//       .then((response) => {
//         if (response.data) {
//           setFoundUser(response.data);
//           console.log(response.data);
//         } else {
//           setFoundUser(null);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setFoundUser(null);
//       });
//   };

//   const handleUpdate = () => {
//     // Enviar una solicitud PUT al servidor para actualizar la información del usuario
//     axios
//       .put(
//         `http://localhost:3000/api/v1/users/${editedUser.id_usuario}`,
//         editedUser
//       )
//       .then((response) => {
//         if (response.data) {
//           setFoundUser(response.data);
//           setSaveMessage("Guardado exitosamente"); // Actualiza el mensaje de guardado
//           console.log("Usuario actualizado:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUser({
//       ...editedUser,
//       [name]: value,
//     });
//   };

//   return (
//     <>
//       <Navegador />
//       <div>
//         <input
//           type="text"
//           placeholder="Ingrese el ID del usuario"
//           value={searchId}
//           onChange={(e) => setSearchId(e.target.value)}
//         />
//         <button onClick={handleSearch}>Buscar</button>

//         {foundUser ? (
//           <div
//             style={{
//               margin: "10px",
//               display: "flex",
//               flexDirection: "column",
//               alignContent: "center",
//               justifyContent: "center",
//             }}
//           >
//             <h3>Usuario Encontrado:</h3>
//             <p>ID: {foundUser.id_usuario}</p>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignContent: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <input
//                 type="text"
//                 name="nombre"
//                 placeholder="Nombre"
//                 value={editedUser.nombre}
//                 onChange={handleInputChange}
//                 style={{
//                   margin: "10px",
//                 }}
//               />
//               <input
//                 type="text"
//                 name="apellido"
//                 placeholder="Apellido"
//                 value={editedUser.apellido}
//                 onChange={handleInputChange}
//                 style={{
//                   margin: "10px",
//                 }}
//               />
//               <input
//                 type="text"
//                 name="dni"
//                 placeholder="DNI"
//                 value={editedUser.dni}
//                 onChange={handleInputChange}
//                 style={{
//                   margin: "10px",
//                 }}
//               />
//             </div>

//             <Button onClick={handleUpdate} variant="outlined" color="primary">
//               Guardar cambios
//             </Button>
//             {saveMessage && <p>{saveMessage}</p>}
//           </div>
//         ) : (
//           <p>Usuario no encontrado</p>
//         )}
//       </div>
//       <button onClick={handleSearch2}>BORRAR USUARIO</button>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Navegador from "./Navegador";

const App = () => {
  const [searchId, setSearchId] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    id_usuario: "",
    nombre: "",
    apellido: "",
    dni: "",
  });
  const [saveMessage, setSaveMessage] = useState(""); // Nuevo estado para el mensaje
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSearch = () => {
    axios
      .get(`http://localhost:3000/api/v1/users/${searchId}`)
      .then((response) => {
        if (response.data) {
          setFoundUser(response.data);
          setEditedUser(response.data); // Prellenar los campos de edición con los datos encontrados
          console.log(response.data);
        } else {
          setFoundUser(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setFoundUser(null);
      });
  };

  const handleSearch2 = () => {
    axios
      .delete(`http://localhost:3000/api/v1/users/${searchId}`)
      .then((response) => {
        if (response.data) {
          setFoundUser(response.data);
          console.log(response.data);
        } else {
          setFoundUser(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setFoundUser(null);
      });
  };

  const handleUpdate = () => {
    // Enviar una solicitud PUT al servidor para actualizar la información del usuario
    axios
      .put(
        `http://localhost:3000/api/v1/users/${editedUser.id_usuario}`,
        editedUser
      )
      .then((response) => {
        if (response.data) {
          setFoundUser(response.data);
          setSaveMessage("Guardado exitosamente"); // Actualiza el mensaje de guardado
          setShowConfirmation(true); // Mostrar la pantalla de confirmación
          console.log("Usuario actualizado:", response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const resetState = () => {
    setFoundUser(null);
    setEditedUser({
      id_usuario: "",
      nombre: "",
      apellido: "",
      dni: "",
    });
    setSaveMessage("");
    setShowConfirmation(false);
  };

  return (
    <>
      <Navegador />
      <div>
        {showConfirmation ? (
          <div>
            <h3>Guardado exitosamente</h3>
            <Button onClick={resetState} variant="outlined" color="primary">
              Volver
            </Button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Ingrese el ID del usuario"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>

            {foundUser ? (
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <h3>Usuario Encontrado:</h3>
                <p>ID: {foundUser.id_usuario}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={editedUser.nombre}
                    onChange={handleInputChange}
                    style={{
                      margin: "10px",
                    }}
                  />
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={editedUser.apellido}
                    onChange={handleInputChange}
                    style={{
                      margin: "10px",
                    }}
                  />
                  <input
                    type="text"
                    name="dni"
                    placeholder="DNI"
                    value={editedUser.dni}
                    onChange={handleInputChange}
                    style={{
                      margin: "10px",
                    }}
                  />
                </div>

                <Button
                  onClick={handleUpdate}
                  variant="outlined"
                  color="primary"
                >
                  Guardar cambios
                </Button>
                {saveMessage && <p>{saveMessage}</p>}
              </div>
            ) : (
              <p>Usuario no encontrado</p>
            )}
          </div>
        )}
      </div>
      {/* <button onClick={handleSearch2}>BORRAR USUARIO</button> */}
    </>
  );
};

export default App;
