import * as React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Navegador from "../components/Navegador";
import Modal from "@mui/material/Modal";

const currencies = [
  { value: "1", label: "Activo" },
  { value: "2", label: "Inactivo" },
];

const CargarCarrera = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      id_estado_carrera: "",
      alta_baja: "1",
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("Debe ingresar un nombre"),
      id_estado_carrera: Yup.number().required("ingrese estado carrera"),
      alta_baja: Yup.number(1).required("ingrese alt"),
    }),

    //hasta aca

    onSubmit: async (data) => {
      try {
        const respuesta = await axios.post(
          "http://localhost:3000/api/v1/carreras",
          data
        );
        abrirModal();
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    formik.resetForm(); // Esto restablecerá el formulario a sus valores iniciales.
  };

  return (
    <>
      <Navegador />
      <Typography
        variant="h4"
        component="h4"
        color="blue"
        align="center"
        marginTop={"100px"}
      >
        Formulario de registro Carreras
      </Typography>
      <Box sx={{ mt: 10 }} component="form" onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 10 }}
        >
          <TextField
            type="text"
            label="Nombre"
            variant="outlined"
            sx={{ width: 300, mt: 3 }}
            name="nombre"
            onChange={formik.handleChange}
          />
          <TextField
            type="number"
            select
            label="Estado Carrera"
            variant="outlined"
            sx={{ width: 300, mt: 3 }}
            name="id_estado_carrera"
            onChange={formik.handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            type="submit"
            sx={{ width: 300, mt: 3, mx: 1 }}
            disabled={!formik.isValid}
          >
            Enviar Formulario
          </Button>

          <Modal open={modalAbierto} onClose={cerrarModal}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" component="div">
                Formulario enviado con éxito.
              </Typography>
              <Button
                variant="contained"
                onClick={cerrarModal}
                sx={{ width: 300, mt: 3 }}
              >
                Cerrar
              </Button>
            </Box>
          </Modal>
          <IconButton
            href="/listarcarreras"
            variant="contained"
            type="submit"
            edge="start"
            aria-label="menu"
            sx={{ width: 300, mt: 3 }}
          >
            Ver Todas las Carreras.
          </IconButton>
        </Grid>
      </Box>
    </>
  );
};

export default CargarCarrera;
