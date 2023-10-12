import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Navegador = () => {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="regular">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{ mr:10}}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/registrar" style={{ textDecoration: 'none', color: 'inherit' }}>
                Registrar Usuario
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/listarusuarios" style={{ textDecoration: 'none', color: 'inherit' }}>
                Listar Usuarios
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/CargarMateria" style={{ textDecoration: 'none', color: 'inherit' }}>
                Registrar Materias
              </Link>
            </MenuItem>
          </Menu>

          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              Inicio
            </Link>
          </Typography>

          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Login
            </Link>
          </Typography>

          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
            <Link to="/Registrar" style={{ textDecoration: 'none', color: 'inherit' }}>
              Registro
            </Link>
          </Typography>

          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
            <Link to="/CargarMateria" style={{ textDecoration: 'none', color: 'inherit' }}>
              Registro Materias
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

        
        </>
        



    )


}
export default Navegador










