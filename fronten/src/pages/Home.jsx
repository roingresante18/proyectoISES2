import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, MenuList } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navegador from "../components/Navegador";
import ModalEdicion from "../components/ModalEdicion/ModalEdicion";
import ModalBorrarUsuario from "../components/ModalBorrar/ModalBorrarUsuario";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';


function Home () {
  return (
    <>
    <Navegador />
    <h1>HOME 1</h1>
    <h1>HOME 2</h1>
    <h1>HOME 3</h1>
    <h1>HOME 4</h1>


    </>
  );
}

export default Home
