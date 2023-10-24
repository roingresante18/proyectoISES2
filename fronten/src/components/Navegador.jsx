import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";

const Navegador = () => {
  const [listadosAnchorEl, setListadosAnchorEl] = useState(null);
  const [registrosAnchorEl, setRegistrosAnchorEl] = useState(null);

  const handleListadosMenuOpen = (event) => {
    setListadosAnchorEl(event.currentTarget);
  };

  const handleRegistrosMenuOpen = (event) => {
    setRegistrosAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setListadosAnchorEl(null);
    setRegistrosAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 1 }}>
        <AppBar position="fixed" sx={{ border: 1 }}>
          <ThemeProvider theme={theme}>
            <Toolbar
              variant="dense"
              style={{
                margin: "2px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{
                  mr: 2, fontSize: "25px"
                }}
              >
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Inicio
                </Link>
              </Typography>

              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ mr: 2, fontSize: "25px" }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Typography>

              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls="listados-menu"
                aria-haspopup="true"
                onClick={handleListadosMenuOpen}
                sx={{ mr: 2, borderBottom: 2, borderColor: "red" }}
              >
                Listados
                {/* <MenuIcon 
               /> */}
              </IconButton>

              <Menu
                anchorEl={listadosAnchorEl}
                open={Boolean(listadosAnchorEl)}
                onClose={handleMenuClose}
                id="listados-menu"
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to="/listarusuarios"
                    style={{ textDecoration: "none", color: "inherit", margin: "10px", fontSize: "25px", color:"blue"}}
                  >
                    Listar Usuarios
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to="/listarmaterias"
                    style={{ textDecoration: "none", color: "inherit", margin: "10px", fontSize: "25px", color:"blue" }}
                  >
                    Listar Materias
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to="/listarcarreras"
                    style={{ textDecoration: "none", color: "inherit", margin: "10px", fontSize: "25px", color:"blue" }}
                  >
                    Listar Carrera
                  </Link>
                </MenuItem>
              </Menu>

              <IconButton
                edge="start"
                color="inherit"
                aria-label="Registros"
                aria-controls="registros-menu"
                aria-haspopup="true"
                onClick={handleRegistrosMenuOpen}
                sx={{ mr: 2, borderBottom: 2, borderColor: "red" }}
              >
                Registros
                {/* <MenuIcon 
               /> */}
              </IconButton>

              <Menu
                anchorEl={registrosAnchorEl}
                open={Boolean(registrosAnchorEl)}
                onClose={handleMenuClose}
                id="registros-menu"
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to="/registrar"
                    style={{
                      textDecoration: "none", color: "inherit", margin: "10px", fontSize: "25px", color:"blue"
                    }}
                  >
                    Registrar Usuario
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to="/CargarMateria"
                    style={{ textDecoration: "none", color: "inherit", margin: "10px", fontSize: "25px", color:"blue" }}
                  >
                    Registrar Materias
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to="/CargarCarrera"
                    style={{ textDecoration: "none", color: "inherit", margin: "10px", fontSize: "25px", color:"blue"}}
                  >
                    Registrar Carrera
                  </Link>
                </MenuItem>
              </Menu>

              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{
                  mr: 2,
                  fontSize: "25px"
                }}
              >
                <Link
                  to="https://itesposadas.edu.ar/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  ISES
                </Link>
              </Typography>
            </Toolbar>
          </ThemeProvider>
        </AppBar>
      </Box>
    </>
  );
};
export default Navegador;
