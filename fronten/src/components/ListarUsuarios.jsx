import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, MenuList } from "@mui/material";

import Navegador from "./Navegador";

import Typography from "@mui/material/Typography";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUserData, setEditedUserData] = useState({
    // Inicializa los campos con valores predeterminados
    // id_usuario: "",
    dni: "",
    nombre: "",
    apellido: "",
  });

  const listado = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3000/api/v1/users");
      console.log([respuesta]);
      setUsers(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listado();
  }, []);

  const deleteSelectedUser = async () => {
    if (selectedUser) {
      try {
        await axios.delete(`http://localhost:3000/api/v1/users/${selectedUser.id_usuario}`);
        // Actualiza la lista de usuarios después de la eliminación
        const updatedUsers = users.filter((user) => user.id_usuario !== selectedUser.id_usuario);
        setUsers(updatedUsers);
        setSelectedUser(null); // Desmarca la selección
      } catch (error) {
        console.log(error);
      }
    }
  };
  const updateSelectedUser = async () => {
    if (selectedUser) {
      try {
        await axios.put(
          `http://localhost:3000/api/v1/users/${selectedUser.id_usuario}`,
          editedUserData
        );
        // Actualiza la lista de usuarios después de la edición
        const updatedUsers = users.map((user) => {
          if (user.id_usuario === selectedUser.id_usuario) {
            return { ...user, ...editedUserData };
          }
          return user;
        });
        setUsers(updatedUsers);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRowSelection = (user) => {
    setSelectedUser(user);
    setEditedUserData({ ...user }); // Inicializa los campos de edición con los datos del usuario seleccionado
  };

  const columns = [
    { field: "id_usuario", headerName: "ID", width: 50 },
    { field: "dni", headerName: "DNI", width: 100 },
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "apellido", headerName: "Apellido", width: 100 },
  ];


  return (
    <>
      <Navegador />
      
      <Container
        sx={{
          display: "flex  ",
          flexDirection: "column",
          marginTop: "10px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <div
          style={{
            height: 400,
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <DataGrid
            rows={users}
            columns={[
              {
                field: "",
                renderCell: (params) => (
                  <input
                    type="radio"
                    name="selectUser"
                    checked={params.row.id_usuario === selectedUser?.id_usuario}
                    onChange={() => handleRowSelection(params.row)}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                ),
              },
              ...columns,
            ]}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            getRowId={(row) => row.id_usuario}
            onRowSelectionModelChange={(newSelection) => {
              console.log("onSelectionModelChange executed:", newSelection);
              if (newSelection.length > 0) {
                console.log("dentro de if seleccionado");
                const selectedUserId = newSelection[0];
                const selectedUser = users.find(
                  (user) => user.id_usuario === selectedUserId
                );
                setSelectedUser(selectedUser);
               
              } else {
                setSelectedUser(null);
               
                console.log("dentro de elseif seleccionado");
              }
            }}
            components={{
              Toolbar: () => (
                <>
                  <GridToolbar
                    style={{
                      backgroundColor: "",
                      color: "white",
                      border: "1px solid black",
                      padding: "5px 10px",
                      borderRadius: "4px",
                    }}
                  />

                </>
              ),
            }}
          />
        </div>
        <div 
        
        >
          {selectedUser && (
            <>
              <input
                type="text"
                placeholder="Nombre"
                value={editedUserData.nombre}
                onChange={(e) =>
                  setEditedUserData({ ...editedUserData, nombre: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Apellido"
                value={editedUserData.apellido}
                onChange={(e) =>
                  setEditedUserData({ ...editedUserData, apellido: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="DNI"
                value={editedUserData.dni}
                onChange={(e) =>
                  setEditedUserData({ ...editedUserData, dni: e.target.value })
                }
              />
              <Button onClick={updateSelectedUser} variant="outlined" color="primary">
                Guardar cambios
              </Button>
            </>
          )}
        </div>
      </Container>
      <Button onClick={deleteSelectedUser} variant="outlined" color="secondary">
        Borrar usuario
      </Button>
      
    </>
  );
}

export default UserTable;
