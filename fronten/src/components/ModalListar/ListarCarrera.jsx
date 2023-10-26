import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, MenuList } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navegador from "../Navegador";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ModalEdicionCarrera from "../ModalEdicion/ModalEdicionCarrera"
import Typography from "@mui/material/Typography";
import ModalBorrarCarrera from "../ModalBorrar/ModalBorrarCarrera"
 
function CarrerasTable() {
  const [Carreras, setCarreras] = useState([]);
  const [selectedMateria, setSelectedMateria] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectMateriaDelete, setSelectMateriaDelete] = useState(null);
  const [isEditModa2Open, setIsEditModa2Open] = useState(false);
  const [editedMateriaData, setEditedMateriaData] = useState({
    // Inicializa los campos con valores predeterminados
    id_carrera: "",
    nombre: "",
    id_estado_carrera: "",
  });
  const estadoCarreraMap = {
    1: "Activo",
    2: "Inactivo",
  };
  const handleRadioChange = (e) => {
    const newValue = e.target.value;
    setEditedMateriaData({
      ...editedMateriaData,
      id_estado_carrera: newValue,
    });
  };

  const [deleteMateriaData, setDeletedMateriaData] = useState({
    // Inicializa los campos con valores predeterminados
    id_carrera: "",
    nombre: "",
    id_estado_carrera: "",
  });
  const listado = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:3000/api/v1/carreras"
      );
      console.log([respuesta]);
      setCarreras(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listado();
  }, []);

  const columns = [
    { field: "id_carrera", headerName: "ID", width: 50 },
    { field: "nombre", headerName: "Nombre", width: 250 },
    { field: "id_estado_carrera", headerName: "Estado carrera", width: 150,
    valueGetter: (params) => estadoCarreraMap[params.row.id_estado_carrera] || "",
  },
  ];

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setIsEditModa2Open(false);
  };

  const handleDelete = () => {
    if (selectMateriaDelete) {
      console.log("if de borrar: " + selectMateriaDelete);
      setDeletedMateriaData({
        id_carrera: selectMateriaDelete.id_carrera,
        alta_baja: 0,
      });
      setIsEditModa2Open(true);
    }
  };

  const handleEdit = () => {
    // Abre el modal de edición al hacer clic en el botón de "Editar"
    if (selectedMateria) {
      console.log("if de handleEdit: " + selectedMateria); // Copia los datos de la fila seleccionada en el objeto de edición
      setEditedMateriaData({
        id_carrera: selectedMateria.id_carrera,
        nombre: selectedMateria.nombre,
        id_estado_carrera: selectedMateria.id_estado_carrera,
        alta_baja: 1,
      }); // Abre el modal de edición
      setIsEditModalOpen(true);
    }
  };

  const handleSaveEdit = async () => {
    try {
      // Envía los cambios al backend para actualizar el usuario
      await axios.put(
        `http://localhost:3000/api/v1/carreras/${editedMateriaData.id_carrera}`,
        editedMateriaData
      );

      // Actualiza el estado local con los datos editados
      const updatedCarreras = Carreras.map((Materia) =>
        Materia.id_carrera === editedMateriaData.id_carrera
          ? editedMateriaData
          : Materia
      );
      setCarreras(updatedCarreras);

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
        `http://localhost:3000/api/v1/carreras/${deleteMateriaData.id_carrera}`,
        deleteMateriaData // Enviar solo el valor que deseas actualizar
      );

      if (response.status === 200) {
        // La solicitud PUT se realizó con éxito
        // Actualiza el estado local con el valor booleano actualizado
        const updatedCarreras = Carreras.map((Materia) => {
          if (Materia.id_carrera === deleteMateriaData.id_carrera) {
            // Actualizar el valor booleano en el usuario actual
            return { ...Materia, alta_baja: 0 };
          }
          return Materia;
        });
        setCarreras(updatedCarreras);

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
      sx={{ mr: 2, borderBottom: 1 ,marginTop:10}}>
        Listado de Carreras
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
            rows={Carreras.filter((Materia) => Materia.alta_baja === 1)}
            columns={[
              {
                field: "",
                renderCell: (params) => (
                  <input
                    type="radio"
                    name="selectMateria"
                    checked={
                      params.row.id_carrera === selectedMateria?.id_carrera
                    }
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
            getRowId={(row) => row.id_carrera}
            onRowSelectionModelChange={(newSelection) => {
              console.log("onSelectionModelChange executed:", newSelection);
              if (newSelection.length > 0) {
                console.log("dentro de if seleccionado");
                const selectedMateriaId = newSelection[0];
                const selectedMateria = Carreras.find(
                  (Materia) => Materia.id_carrera === selectedMateriaId
                );
                setSelectedMateria(selectedMateria);
                setSelectMateriaDelete(selectedMateria);
              } else {
                setSelectedMateria(null);
                setSelectMateriaDelete(null);
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
            disabled={!selectedMateria}
            onClick={handleEdit}
          >
            Editar
          </Button>

          <ModalEdicionCarrera
            open={isEditModalOpen}
            handleClose={() => setIsEditModalOpen(false)}
            editedMateriaData={editedMateriaData}
            handleSaveEdit={handleSaveEdit}
            handleEditModalClose={handleEditModalClose}
            handleRadioChange={handleRadioChange}
            setSelectedMateria={setSelectedMateria}
            setEditedMateriaData={setEditedMateriaData}
          />
          {/* //modal de borrar carrera********************************/}
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            color="error"
            disabled={!selectMateriaDelete}
            onClick={handleDelete}
          >
            Borrar
          </Button>

          <ModalBorrarCarrera
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

export default CarrerasTable;
