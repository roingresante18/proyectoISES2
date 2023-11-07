import * as React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import Navegador from "../components/Navegador";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import themeFormik from "../theme/themeFormik";
import theme from "../theme/theme";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

function Registrar() {
  const formik = useFormik({
    initialValues: {
      id_usuario: "",
      nombre: "",
      apellido: "",
      dni: "",
    },
    //
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debe ingresar un Nombre"),
      apellido: Yup.string().required("Debe ingresar Apellido"),
      dni: Yup.number().required("ingrese DNI"),
    }),
    onSubmit: async (data) => {
      try {
        const respuesta = await axios.post(
          "http://localhost:3000/api/v1/users",
          {
            nombre: data.nombre,
            apellido: data.apellido,
            dni: data.dni,
          }
        );

        console.log("------- POST USER ---------", respuesta);
        console.log(
          "------- POST USER ---------",
          respuesta.data.data.id_usuario
        );

        abrirModal();
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
      console.log(data);
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
        padding={"10px"}
        marginTop={10}
      >
        Formulario de registro usuario
      </Typography>
      <Box
        sx={{
          width: 800,
          minWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Grid
          container
          spacing={2}
          columns={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <div //nombre
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              type="text"
              label="Nombre"
              variant="outlined"
              sx={{ width: 300, mt: 3, mx: 1 }}
              name="nombre"
              onChange={formik.handleChange}
              error={!!formik.errors.nombre}
            />

            {formik.errors.nombre && (
              <ThemeProvider theme={theme}>
                <div
                  style={{
                    color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                    fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                  }}
                >
                  {formik.errors.nombre}
                </div>
              </ThemeProvider>
            )}
          </div>

          <div //Apellido
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              type="text"
              label="Apellido"
              variant="outlined"
              sx={{ width: 300, mt: 3, mx: 1 }}
              name="apellido"
              onChange={formik.handleChange}
              error={!!formik.errors.apellido}
            />

            {formik.errors.apellido && (
              <ThemeProvider theme={theme}>
                <div
                  style={{
                    color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                    fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                  }}
                >
                  {formik.errors.apellido}
                </div>
              </ThemeProvider>
            )}
          </div>


          <div //dni
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              type="number"
              label="DNI"
              variant="outlined"
              sx={{ width: 300, mt: 3, mx: 1 }}
              name="dni"
              onChange={formik.handleChange}
              error={!!formik.errors.dni}
            />

            {formik.errors.dni && (
              <ThemeProvider theme={theme}>
                <div
                  style={{
                    color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                    fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                  }}
                >
                  {formik.errors.dni}
                </div>
              </ThemeProvider>
            )}
          </div>

          
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          <Button
            disabled={!formik.isValid}
            variant="contained"
            type="submit"
            sx={{ width: 300, mt: 3, mx: 1 }}
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
            href="/listarusuarios"
            variant="contained"
            type="submit"
            edge="start"
            aria-label="menu"
            sx={{ width: 300, mt: 3 }}
          >
            Ver todos los usuarios
          </IconButton>
        </Grid>
      </Box>
    </>
  );
}

export default Registrar;
