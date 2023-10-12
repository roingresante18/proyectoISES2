import * as React from "react";
import {Modal, Button, Container, MenuList } from "@mui/material";

function ModalBorrarUsuario(props){
    const {
        handleSaveDelete,
        handleEditModalClose,
        open,
        handleClose,
    }=props;

    const modalStyles = {
        position: "absolute",
        flexDirection: "column",
        margin: "20px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
      };

      return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div
                className="edit-modal"
                style={modalStyles}
            >
                <h2>Borrar Usuario</h2>
                <h3>¿Estas seguro de borrar el usuario?</h3>
                <div>
                    <button onClick={handleSaveDelete}>Confirmar</button>
                    <button onClick={handleEditModalClose}>Cancelar</button>
                </div>
            </div>

        </Modal>
        
  )}

export default ModalBorrarUsuario;
 
