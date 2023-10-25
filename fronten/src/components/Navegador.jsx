import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
const Navegador = () => {
  const [listadosAnchorEl, setListadosAnchorEl] = useState(null);
  const [registrosAnchorEl, setRegistrosAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setListadosAnchorEl(null);
    setRegistrosAnchorEl(null);
  };

  const listadosLinks = [
    { to: "/listarusuarios", label: "Listar Usuarios" },
    { to: "/listarmaterias", label: "Listar Materias" },
    { to: "/listarcarreras", label: "Listar Carrera" },
  ];

  const registrosLinks = [
    { to: "/registrar", label: "Registrar Usuario" },
    { to: "/CargarMateria", label: "Registrar Materias" },
    { to: "/CargarCarrera", label: "Registrar Carrera" },
  ];

  return (
    <Box sx={{ flexGrow: 1, margin: 1 }}>
      <AppBar position="fixed" sx={{ border: 1 }}>
        <ThemeProvider theme={theme}>
          <Toolbar
            variant="dense"
            style={{
              margin: "5px",
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
                mr: 2,
                fontSize: "25px",
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
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Login
              </Link>
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="listados-menu"
              aria-haspopup="true"
              onMouseEnter={(e) => setListadosAnchorEl(e.currentTarget)}
              onMouseLeave={() => setListadosAnchorEl(null)}
              sx={{ mr: 2, borderBottom: 2, borderColor: "red" }}
            >
              Listados
              <Popover
                open={Boolean(listadosAnchorEl)}
                anchorEl={listadosAnchorEl}
                onClose={() => setListadosAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Menu
                  anchorEl={listadosAnchorEl}
                  open={Boolean(listadosAnchorEl)}
                  onClose={handleMenuClose}
                  id="listados-menu"
                >
                  {listadosLinks.map((link, index) => (
                    <MenuItem key={index} onClick={handleMenuClose}>
                      <Link
                        to={link.to}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          margin: "10px",
                          fontSize: "25px",
                          color: "blue",
                        }}
                      >
                        {link.label}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Popover>
            </IconButton>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="registros-menu"
              aria-haspopup="true"
              onMouseEnter={(e) => setRegistrosAnchorEl(e.currentTarget)}
              onMouseLeave={() => setRegistrosAnchorEl(null)}
              sx={{ mr: 2, borderBottom: 2, borderColor: "red" }}
            >
              Registros
              <Popover
                open={Boolean(registrosAnchorEl)}
                anchorEl={registrosAnchorEl}
                onClose={() => setRegistrosAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Menu
                  anchorEl={registrosAnchorEl}
                  open={Boolean(registrosAnchorEl)}
                  onClose={handleMenuClose}
                  id="registros-menu"
                >
                  {registrosLinks.map((link, index) => (
                    <MenuItem key={index} onClick={handleMenuClose}>
                      <Link
                        to={link.to}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          margin: "10px",
                          fontSize: "25px",
                          color: "blue",
                        }}
                      >
                        {link.label}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Popover>
            </IconButton>

            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                mr: 2,
                fontSize: "25px",
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
  );
};

export default Navegador;
