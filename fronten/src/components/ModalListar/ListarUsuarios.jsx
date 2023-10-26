import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, MenuList } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navegador from "../Navegador";
import ModalEdicion from "../ModalEdicion/ModalEdicion";
import ModalBorrarUsuario from "../ModalBorrar/ModalBorrarUsuario";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Typography from "@mui/material/Typography";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectUserDelete, setSelectUserDelete] = useState(null);
  const [isEditModa2Open, setIsEditModa2Open] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    // Inicializa los campos con valores predeterminados
    id_usuario: "",
    clave: "",
    dni: "",
    nombre: "",
    apellido: "",
    direccion: "",
    correo1: "",
    correo2: "",
    telefono1: "",
    telefono2: "",
    fecha_nacimiento: "",
    nacionalidad: "",
    id_tipo_usuario: "",
    id_estado_usuario: "",
    legajo: "",
    fecha_inscripcion: "",
    id_carrera: "",
  });

  const tipoUsuarioMap = {
    1: "Administrador",
    2: "Preceptor/a",
    3: "Alumno/a",
  };
  const estadoUsuarioMap = {
    1: "Activo",
    2: "Inactivo",
  };

  const handleRadioChange = (e) => {
    const newValue = e.target.value;
    setEditedUserData({
      ...editedUserData,
      id_tipo_usuario: newValue,
    });
  };
  const handleRadioChange2 = (e) => {
    const newValue = e.target.value;
    setEditedUserData({
      ...editedUserData,
      id_estado_usuario: newValue,
    });
  };

  const [deleteUserData, setDeletedUserData] = useState({
    // Inicializa los campos con valores predeterminados
    id_usuario: "",
    clave: "",
    dni: "",
    nombre: "",
    apellido: "",
    direccion: "",
    correo1: "",
    correo2: "",
    telefono1: "",
    telefono2: "",
    fecha_nacimiento: "",
    nacionalidad: "",
    id_tipo_usuario: "",
    id_estado_usuario: "",
    alta_baja: "",
    legajo: "",
    fecha_inscripcion: "",
    id_carrera: "",
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
    { field: "clave", headerName: "CLAVE", width: 100 },
    { field: "dni", headerName: "DNI", width: 100 },
    { field: "nombre", headerName: "Nombre", width: 100 },
    { field: "apellido", headerName: "Apellido", width: 100 },
    { field: "direccion", headerName: "Direccion", width: 100 },
    { field: "correo1", headerName: "Correo 1", width: 100 },
    { field: "correo2", headerName: "correo 2", width: 100 },
    { field: "telefono1", headerName: "telefono 1", width: 100 },
    { field: "telefono2", headerName: "telefono 2", width: 100 },
    { field: "fecha_nacimiento", headerName: "fecha nacimiento", width: 100 },
    { field: "nacionalidad", headerName: "Nacionalidad", width: 100 },
    {
      field: "id_tipo_usuario",
      headerName: "tipo usuario",
      width: 150,
      valueGetter: (params) => tipoUsuarioMap[params.row.id_tipo_usuario] || "",
    },
    {
      field: "id_estado_usuario",
      headerName: "estado usuario",
      width: 150,

      valueGetter: (params) =>
        estadoUsuarioMap[params.row.id_estado_usuario] || "",
    },
  ];

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setIsEditModa2Open(false);
  };

  const handleDelete = () => {
    if (selectUserDelete) {
      console.log("if de borrar: " + selectUserDelete);
      setDeletedUserData({
        id_usuario: selectUserDelete.id_usuario,
        alta_baja: 0,
      });
      setIsEditModa2Open(true);
    }
  };

  const handleEdit = () => {
    // Abre el modal de edición al hacer clic en el botón de "Editar"
    if (selectedUser) {
      console.log("if de handleEdit: " + selectedUser); // Copia los datos de la fila seleccionada en el objeto de edición
      setEditedUserData({
        id_usuario: selectedUser.id_usuario,
        clave: selectedUser.clave,
        dni: selectedUser.dni,
        nombre: selectedUser.nombre,
        apellido: selectedUser.apellido,
        direccion: selectedUser.direccion,
        correo1: selectedUser.correo1,
        correo2: selectedUser.correo2,
        telefono1: selectedUser.telefono1,
        telefono2: selectedUser.telefono2,
        fecha_nacimiento: selectedUser.fecha_nacimiento,
        nacionalidad: selectedUser.nacionalidad,
        id_tipo_usuario: selectedUser.id_tipo_usuario,
        id_estado_usuario: selectedUser.id_estado_usuario,
        alta_baja: 1,
        legajo: selectedUser.legajo,
        fecha_inscripcion: selectedUser.fecha_inscripcion,
        id_carrera: selectedUser.id_carrera,
      }); // Abre el modal de edición
      setIsEditModalOpen(true);
    }
  };

  const handleSaveEdit = async () => {
    try {
      // Envía los cambios al backend para actualizar el usuario
       await axios.put(
        `http://localhost:3000/api/v1/users/${editedUserData.id_usuario}`,
        {
          nombre: editedUserData.nombre,
          apellido: editedUserData.apellido,
          clave: editedUserData.clave,
          dni: editedUserData.dni,
          nacionalidad: editedUserData.nacionalidad,
          direccion: editedUserData.direccion,
          correo1: editedUserData.correo1,
          correo2: editedUserData.correo2,
          telefono1: editedUserData.telefono1,
          telefono2: editedUserData.telefono2,
          fecha_nacimiento: editedUserData.fecha_nacimiento,
          id_tipo_usuario: editedUserData.id_tipo_usuario,
          id_estado_usuario: editedUserData.id_estado_usuario,
          alta_baja: 1,
        }
      );
      console.log("------- POST USER ---------",);

      console.log(editedUserData.id_usuario);
      if (editedUserData.id_tipo_usuario === "3") {
        await axios.put(
          `http://localhost:3000/api/v1/alumnos/${editedUserData.id_alumno}`,
          {
            legajo: editedUserData.legajo,
            fecha_inscripcion: editedUserData.fecha_inscripcion,
            id_carrera: editedUserData.id_carrera,
            id_usuario: editedUserData.id_usuario,
          }
        );
      }
      // Actualiza el estado local con los datos editados
      const updatedUsers = users.map((user) =>
        user.id_usuario === editedUserData.id_usuario ? editedUserData : user
      );
      setUsers(updatedUsers);

      // Cierra el modal de edición
      setIsEditModalOpen(false);
      // setIsEditModa2Open(false);
    } catch (error) {
      console.log("no se pudo ahcer la coneccion " + error);
    }
  };

  const handleSaveDelete = async () => {
    try {
      // Envía los cambios al backend para actualizar el usuario
      const response = await axios.put(
        `http://localhost:3000/api/v1/users/${deleteUserData.id_usuario}`,
        deleteUserData // Enviar solo el valor que deseas actualizar
      );

      if (response.status === 200) {
        // La solicitud PUT se realizó con éxito
        // Actualiza el estado local con el valor booleano actualizado
        const updatedUsers = users.map((user) => {
          if (user.id_usuario === deleteUserData.id_usuario) {
            // Actualizar el valor booleano en el usuario actual
            return { ...user, alta_baja: 0 };
          }
          return user;
        });
        setUsers(updatedUsers);

        // Cierra el modal de edición
        setIsEditModa2Open(false);
      } else {
        console.log(
          "Error al actualizar el usuario. Código de estado HTTP:",
          response.status
        );
      }
    } catch (error) {
      console.error("No se pudo hacer la conexión:", error);
    }
  };

  const customLocaleText = {
    toolbarExport: "Exportar",
    toolbarColumns: "Columnas",
    toolbarFilters: "Filtros",
    toolbarDensity: "Vista",
    toolbarDensityCompact: "Compacto",
    toolbarDensityStandard: "Standard",
    toolbarDensityComfortable: "Confortable",
    columnsPanelShowAllButton: "Mostrar todo",
    columnsPanelHideAllButton: "Ocultar todo",
    toolbarExportCSV: "Exportar CSV",
    toolbarExportPrint: "Imprimir",
  };

  return (
    <>
      <Navegador />
      <Typography
        variant="h5"
        color=""
        component="div"
        sx={{ mr: 2, borderBottom: 1, marginTop: 10 }}
      >
        Listado de Usuarios
      </Typography>
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
            rows={users.filter((user) => user.alta_baja === 1)}
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
            localeText={customLocaleText}
          />

          {/* Modal de edición */}
          <Button
            startIcon={<BorderColorOutlinedIcon />}
            variant="outlined"
            color="success"
            disabled={!selectedUser}
            onClick={handleEdit}
          >
            Editar
          </Button>

          <ModalEdicion
            open={isEditModalOpen}
            handleClose={() => setIsEditModalOpen(false)}
            editedUserData={editedUserData}
            handleSaveEdit={handleSaveEdit}
            handleEditModalClose={handleEditModalClose}
            handleRadioChange={handleRadioChange}
            handleRadioChange2={handleRadioChange2}
            setSelectedUser={setSelectedUser}
            setEditedUserData={setEditedUserData}
          />
          {/* //modal de borrar usuario ********************************/}
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            color="error"
            disabled={!selectUserDelete}
            onClick={handleDelete}
          >
            Borrar
          </Button>

          <ModalBorrarUsuario
            open={isEditModa2Open}
            handleClose={() => setIsEditModa2Open(false)}
            handleSaveDelete={handleSaveDelete}
            handleEditModalClose={handleEditModalClose}
          />
        </div>
      </Container>
    </>
  );
}

export default UserTable;
