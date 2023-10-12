import * as React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import Navegador from "./Navegador";

const currencies = [
  { value: '1', label: 'Cuatrimestral', },
  { value: '2', label: 'Anual', },
];

const CargarMaterias = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const formik = useFormik({
    initialValues: {
        nombre: "",
        id_tipo_materia:"",
      // id_estado_usuario:"",

      //RESET FORMIK
    },

    //
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debe ingresar un nombre"),
      id_tipo_materia: Yup.number().required("ingrese tipo materia"),
    }),

    //hasta aca

    onSubmit: async (data) => {
      try {
        const respuesta = await axios.post("http://localhost:3000/api/v1/materias",data);
        console.log(respuesta);
        // navigate("http://localhost:5173/home");
      } catch (error) {
        console.log(error);
      }
    },
  });


  return (
    <>
     <Navegador/>


      <Typography variant="h4" component="h4" color="blue" align="center"marginTop={"100px"}>
        Formulario de registro Materias
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
            label="id_tipo_materia"
            variant="outlined"
            sx={{ width: 300, mt: 3 }}
            name="id_tipo_materia"
            onChange={formik.handleChange}
          >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>

           <Button variant="contained" type="submit" sx={{ width: 300, mt: 3 }}>
              Enviar Formulario
            </Button>
        </Grid>               
       
      </Box>
    </>
  );
};

export default CargarMaterias;
