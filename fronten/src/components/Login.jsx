import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, MenuList } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navegador from "./Navegador";
import ModalEdicion from "./ModalEdicion";
import ModalBorrarUsuario from "./ModalBorrarUsuario";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';


function Login () {
  return (
    <>
    <Navegador />
    <h1>LOGIN 1</h1>
    <h1>LOGIN 2</h1>
    <h1>LOGIN 3</h1>
    <h1>LOGIN 4</h1>
    </>
  );
}

export default Login
