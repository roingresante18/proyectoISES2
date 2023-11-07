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
  

  return (
    <Box sx={{ flexGrow: 1, margin: 10 }}>
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
                to="/listarusuarios"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                listar usuario
              </Link>
            </Typography>
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
                to="/listarusuarioindividual"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                listar usuario individual
              </Link>
            </Typography>

            

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
                to="/registrar"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                registrar
              </Link>
            </Typography>
          </Toolbar>
        </ThemeProvider>
      </AppBar>
    </Box>
  );
};

export default Navegador;
