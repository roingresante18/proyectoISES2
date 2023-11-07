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
    id_usuario: "",
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

  const columns = [
    { field: "id_usuario", headerName: "ID", width: 50 },
    { field: "dni", headerName: "DNI", width: 100 },
    { field: "nombre", headerName: "Nombre", width: 100 },
    { field: "apellido", headerName: "Apellido", width: 100 },
  ];


  return (
    <>
      <Navegador />
      
      <Container
        sx={{
          display: "flex  ",
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
            height: 650,
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
                setSelectUserDelete(selectedUser);
              } else {
                setSelectedUser(null);
                setSelectUserDelete(null);
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
      </Container>
    </>
  );
}

export default UserTable;
