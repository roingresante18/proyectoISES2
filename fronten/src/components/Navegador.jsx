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
import { red } from "@mui/material/colors";
import { Modal, Backdrop } from "@mui/material";

const Navegador = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setMenuAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ border: 1 }}>
          <ThemeProvider theme={theme}>
            <Toolbar variant="regular">
              {/* MENU DESPLEGABLE */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{ mr: 10, borderBottom: 2, borderColor: "red" }}
              >
                <MenuIcon />
              </IconButton>
              <Modal
                open={isMenuOpen}
                onClose={handleMenuClose}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                }}
              >
                <Menu
                  anchorEl={menuAnchorEl}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                  PaperProps={{
                    sx: {
                      width: "200px", // Ancho del menú
                      borderRadius: "8px", // Borde redondeado
                      height: "50%",
                    },
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      to="/registrar"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      Registrar Usuario
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      to="/listarusuarios"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Listar Usuarios
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      to="/CargarMateria"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Registrar Materias
                    </Link>
                  </MenuItem>
                </Menu>
              </Modal>

              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ mr: 2, borderBottom: 1 }}
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
                sx={{ mr: 2, borderBottom: 1 }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Typography>

              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ mr: 2, borderBottom: 1 }}
              >
                <Link
                  to="/Registrar"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Registro
                </Link>
              </Typography>

              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ mr: 2, borderBottom: 1 }}
              >
                <Link
                  to="/CargarMateria"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Registro Materias
                </Link>
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ mr: 2, borderBottom: 1, color: red }}
              >
                <Link
                  to="https://itesposadas.edu.ar/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Ises
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
