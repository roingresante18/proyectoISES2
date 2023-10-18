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
import Navegador from "./Navegador";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import themeFormik from "../theme/themeFormik";
import theme from "../theme/theme";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
const currencies = [
  { value: "1", label: "Administrador" },
  { value: "2", label: "Preceptor/a" },
  { value: "3", label: "Alumno/a" },
];
const currencies2 = [
  { value: "1", label: "Activo" },
  { value: "2", label: "Inactivo" },
];

function Registrar() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      clave: "",
      dni: "",
      nacionalidad: "",
      direccion: "",
      correo1: "",
      correo2: "",
      telefono1: "",
      telefono2: "",
      fecha_nacimiento: "",
      id_tipo_usuario: "",
      id_estado_usuario: "",
      alta_baja: "1",
    },
    //
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debe ingresar un Nombre"),
      apellido: Yup.string().required("Debe ingresar Apellido"),
      clave: Yup.string().required("ingrese una clave"),
      dni: Yup.number().required("ingrese DNI"),
      nacionalidad: Yup.string().required("ingrese Nacionalidad"),
      direccion: Yup.string().required("debe ingresar Direccion"),
      correo1: Yup.string().required("Debe ingresar un email"),
      correo2: Yup.string().notRequired("Debe email"),
      telefono1: Yup.number().required("ingrese numero de telefono"),
      telefono2: Yup.number().notRequired("ingrese telefono"),
      fecha_nacimiento: Yup.date().required("ingrese fecha nacimiento"),
      id_tipo_usuario: Yup.number().required("defina tipo de Usuario"),
      id_estado_usuario: Yup.number().required("defina estado de usuario"),
      alta_baja: Yup.number(1).required("ingrese alt"),
    }),
    onSubmit: async (data) => {
      try {
        const respuesta = await axios.post(
          "http://localhost:3000/api/v1/users",
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
            <div
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

            <div
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

              {formik.errors.nombre && (
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="text"
                label="Clave"
                variant="outlined"
                sx={{ width: 300, mt: 3, mx: 1 }}
                name="clave"
                onChange={formik.handleChange}
                error={!!formik.errors.clave}
              />

              {formik.errors.nombre && (
                <ThemeProvider theme={theme}>
                  <div
                    style={{
                      color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                      fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                    }}
                  >
                    {formik.errors.clave}
                  </div>
                </ThemeProvider>
              )}
            </div>
            <div
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

              {formik.errors.nombre && (
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="text"
                label="Nacionalidad"
                variant="outlined"
                sx={{ width: 300, mt: 3, mx: 1 }}
                name="nacionalidad"
                onChange={formik.handleChange}
                error={!!formik.errors.nacionalidad}
              />

              {formik.errors.nombre && (
                <ThemeProvider theme={theme}>
                  <div
                    style={{
                      color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                      fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                    }}
                  >
                    {formik.errors.nacionalidad}
                  </div>
                </ThemeProvider>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="text"
                label="Direccion"
                variant="outlined"
                sx={{ width: 300, mt: 3, mx: 1 }}
                name="direccion"
                onChange={formik.handleChange}
                error={!!formik.errors.direccion}
              />

              {formik.errors.nombre && (
                <ThemeProvider theme={theme}>
                  <div
                    style={{
                      color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                      fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                    }}
                  >
                    {formik.errors.direccion}
                  </div>
                </ThemeProvider>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="email"
                label="email"
                variant="outlined"
                sx={{ width: 300, mt: 3, mx: 1 }}
                name="correo1"
                onChange={formik.handleChange}
                error={!!formik.errors.correo1}
              />

              {formik.errors.nombre && (
                <ThemeProvider theme={theme}>
                  <div
                    style={{
                      color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                      fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                    }}
                  >
                    {formik.errors.correo1}
                  </div>
                </ThemeProvider>
              )}
            </div>

            <TextField
              type="email"
              label="email2"
              variant="outlined"
              sx={{ width: 300, mt: 3, mx: 1 }}
              name="correo2"
              onChange={formik.handleChange}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="number"
                label="Telefono"
                variant="outlined"
                sx={{ width: 300, mt: 3, mx: 1 }}
                name="telefono1"
                onChange={formik.handleChange}
                error={!!formik.errors.telefono1}
              />

              {formik.errors.nombre && (
                <ThemeProvider theme={theme}>
                  <div
                    style={{
                      color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                      fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                    }}
                  >
                    {formik.errors.telefono1}
                  </div>
                </ThemeProvider>
              )}
            </div>

            <TextField
              type="number"
              label="Telefono2"
              variant="outlined"
              sx={{ width: 300, mt: 3, mx: 1 }}
              name="telefono1"
              onChange={formik.handleChange}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="date"
                label="Fecha Nacimiento"
                variant="outlined"
                sx={{ width: 300, mt: 3, mx: 1 }}
                name="fecha_nacimiento"
                onChange={formik.handleChange}
                error={!!formik.errors.fecha_nacimiento}
                InputProps={{
                  startAdornment: <SearchIcon />,
                }}
              />

              {formik.errors.nombre && (
                <ThemeProvider theme={theme}>
                  <div
                    style={{
                      color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                      fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                    }}
                  >
                    {formik.errors.fecha_nacimiento}
                  </div>
                </ThemeProvider>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="number"
                select
                label="Seleccione Tipo de Usuario"
                variant="outlined"
                sx={{ width: 300, mt: 3, mx: 1 }}
                name="id_tipo_usuario"
                onChange={formik.handleChange}
                error={!!formik.errors.id_tipo_usuario}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              {formik.errors.nombre && (
                <ThemeProvider theme={theme}>
                  <div
                    style={{
                      color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                      fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                    }}
                  >
                    {formik.errors.id_tipo_usuario}
                  </div>
                </ThemeProvider>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="number"
                select
                label="Estado de Usuario"
                variant="outlined"
                sx={{ width: 300, mt: 3 }}
                name="id_estado_usuario"
                onChange={formik.handleChange}
                error={!!formik.errors.id_estado_usuario}
              >
                {currencies2.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              {formik.errors.nombre && (
                <ThemeProvider theme={theme}>
                  <div
                    style={{
                      color: theme.palette.error.main, // Cambia el color del texto del mensaje de error
                      fontSize: "12px", // Cambia el tamaño de la fuente del mensaje de error
                    }}
                  >
                    {formik.errors.id_estado_usuario}
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
