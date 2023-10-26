import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, MenuList } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navegador from "../Navegador";
// import ModalEdicion from "./ModalEdicion";
import Typography from "@mui/material/Typography";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ModalEdicionMaterias from "../ModalEdicion/ModalEdicionMateria";
import ModalBorrarMateria from "../ModalBorrar/ModalBorrarMateria";

function MateriasTable() {
  const [Materias, setMaterias] = useState([]);
  const [selectedMateria, setSelectedMateria] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectMateriaDelete, setSelectMateriaDelete] = useState(null);
  const [isEditModa2Open, setIsEditModa2Open] = useState(false);
  const [editedMateriaData, setEditedMateriaData] = useState({
    // Inicializa los campos con valores predeterminados
    id_materia: "",
    nombre: "",
    id_tipo_materia: "",
    id_estado_materia: "",
       
  });

  const tipoMateriaMap = {
    1: "Regular",
    2: "Promocional",
  };
  const estadoMateriaMap = {
    1: "Activo",
    2: "Inactivo",
  };

  const handleRadioChange = (e) => {
    const newValue = e.target.value;
    setEditedMateriaData({
      ...editedMateriaData,
      id_tipo_materia: newValue,
    });
  };
  const handleRadioChange2 = (e) => {
    const newValue = e.target.value;
    setEditedMateriaData({
      ...editedMateriaData,
      id_estado_materia: newValue,
    });
  };
  

  const [deleteMateriaData, setDeletedMateriaData] = useState({
    // Inicializa los campos con valores predeterminados
    id_materia: "",
    nombre: "",
    id_tipo_materia: "",
    id_estado_materia: "",
       
  });
  const listado = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3000/api/v1/materias");
      console.log([respuesta]);
      setMaterias(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listado();
  }, []);

  const columns = [
    { field: "id_materia", headerName: "ID", width: 50 },
    { field: "nombre", headerName: "Nombre", width: 250 },
    { field: "id_tipo_materia", headerName: "Tipo Materias", width: 150,
    valueGetter: (params) => tipoMateriaMap[params.row.id_tipo_materia] || "",
  },
    { field: "id_estado_materia", headerName: "Estado Materias", width: 150,
    valueGetter: (params) => estadoMateriaMap[params.row.id_estado_materia] || "",
  },
  ];

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setIsEditModa2Open(false)
  };

  const handleDelete = () => {
    if (selectMateriaDelete){
      console.log("if de borrar: "+selectMateriaDelete);
      setDeletedMateriaData({
        id_materia: selectMateriaDelete.id_materia,
        alta_baja: 0
      })
      setIsEditModa2Open(true)
    }}
 
  const handleEdit = () => { // Abre el modal de edición al hacer clic en el botón de "Editar"
    if (selectedMateria) {
      console.log("if de handleEdit: "+ selectedMateria); // Copia los datos de la fila seleccionada en el objeto de edición
      setEditedMateriaData({
        id_materia: selectedMateria.id_materia,
        nombre: selectedMateria.nombre,
        id_tipo_materia: selectedMateria.id_tipo_materia,
        id_estado_materia: selectedMateria.id_estado_materia,
        alta_baja: 1
      }); // Abre el modal de edición
      setIsEditModalOpen(true);
    }
  };

  const handleSaveEdit = async () => {
    try {
      // Envía los cambios al backend para actualizar el usuario
      await axios.put(
        `http://localhost:3000/api/v1/materias/${editedMateriaData.id_materia}`,
        editedMateriaData
      );

      // Actualiza el estado local con los datos editados
      const updatedMaterias = Materias.map((Materia) =>
        Materia.id_materia === editedMateriaData.id_materia ? editedMateriaData : Materia
      );
      setMaterias(updatedMaterias);

      // Cierra el modal de edición
      setIsEditModalOpen(false);
      // setIsEditModa2Open(false);
    } catch (error) {
      console.log("no se pudo ahcer la coneccion "+error);
    }
  };

  const handleSaveDelete = async () => {
    try {
      // Envía los cambios al backend para actualizar el usuario
      const response = await axios.put(
        `http://localhost:3000/api/v1/Materias/${deleteMateriaData.id_materia}`,
        deleteMateriaData// Enviar solo el valor que deseas actualizar
      );
  
      if (response.status === 200) {
        // La solicitud PUT se realizó con éxito
        // Actualiza el estado local con el valor booleano actualizado
        const updatedMaterias = Materias.map((Materia) => {
          if (Materia.id_materia === deleteMateriaData.id_materia) {
            // Actualizar el valor booleano en el usuario actual
            return { ...Materia, alta_baja: 0 };
          }
          return Materia;
        });
        setMaterias(updatedMaterias);
  
        // Cierra el modal de edición
        setIsEditModa2Open(false);
      } else {
        console.log("Error al actualizar el usuario. Código de estado HTTP:", response.status);
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
  toolbarDensityCompact: 'Compacto',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Confortable',
  columnsPanelShowAllButton: 'Mostrar todo',
  columnsPanelHideAllButton: 'Ocultar todo',
  toolbarExportCSV: 'Exportar CSV',
  toolbarExportPrint: 'Imprimir',
  };
  
  
  return (
    <>
      <Navegador />
      <Typography
      variant="h5"
      color=""
      component="div"
      sx={{ mr: 2, borderBottom: 1 ,marginTop:10}}>
        Listado de Materias
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
            rows={Materias.filter((Materia) => Materia.alta_baja === 1)}
            columns={[
              {
                field: "",
                renderCell: (params) => (
                  <input
                    type="radio"
                    name="selectMateria"
                    checked={params.row.id_materia === selectedMateria?.id_materia}
                    onChange={() => handleRowSelection(params.row)}
                    style={{
                      width:20,
                      height:20,
                    }}
                  />
                ),
              },
              ...columns, 
            ]}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            getRowId={(row) => row.id_materia}
            onRowSelectionModelChange={(newSelection) => {
              console.log("onSelectionModelChange executed:", newSelection);
              if (newSelection.length > 0) {
                console.log("dentro de if seleccionado");
                const selectedMateriaId = newSelection[0];
                const selectedMateria = Materias.find(
                  (Materia) => Materia.id_materia === selectedMateriaId
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

          <ModalEdicionMaterias
            open={isEditModalOpen}
            handleClose={() => setIsEditModalOpen(false)}
            editedMateriaData={editedMateriaData}
            handleSaveEdit={handleSaveEdit}
            handleEditModalClose={handleEditModalClose}
            handleRadioChange={handleRadioChange}
            handleRadioChange2={handleRadioChange2}
            setSelectedMateria={setSelectedMateria}
            setEditedMateriaData={setEditedMateriaData}
          />
          {/* //modal de borrar usuario ********************************/}
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            color="error"
            disabled={!selectMateriaDelete}
            onClick={handleDelete}
          >
            Borrar
          </Button>

          <ModalBorrarMateria
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

export default MateriasTable 