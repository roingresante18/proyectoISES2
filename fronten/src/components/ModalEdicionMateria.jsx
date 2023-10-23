import React from "react";
import { Modal, Button } from "@mui/material";
// import UserTable from  "./ListarUsuarios";

function ModalEdicionMaterias(props) {
  const {
    open,
    handleClose,
    editedMateriaData,
    handleSaveEdit,
    handleEditModalClose,
    handleRadioChange,
    handleRadioChange2,
    setSelectedUser,
    setEditedUserData,
  } = props;
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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="edit-modal" style={modalStyles}>
        <h2>Editar MATERIA</h2>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={editedMateriaData.nombre}
              onChange={(e) =>
                setEditedUserData({
                  ...editedMateriaData,
                  nombre: e.target.value,
                })
              }
              style={{
                margin: "10px",
              }}
            />
          </div>

          <div>
            <label htmlFor="id_tipo_materia">Tipo Materia:</label>
            <input
              type="radio"
              id="regular"
              name="id_tipo_materia"
              value="1"
              checked={editedMateriaData.id_tipo_materia === "1"}
              onChange={(e) => handleRadioChange(e)}
              style={{
                width: 20,
                height: 20,
                margin: "10px",
              }}
            />
            <label htmlFor="regular">regular</label>

            <input
              type="radio"
              id="promocional"
              name="id_tipo_materia"
              value="2"
              checked={editedMateriaData.id_tipo_materia === "2"}
              onChange={(e) => handleRadioChange(e)}
              style={{
                width: 20,
                height: 20,
                margin: "10px",
              }}
            />
            <label htmlFor="promocional">promocional</label>
          </div>

          <div>
            <label htmlFor="id_estado_materia">Estado Materia:</label>
            <input
              type="radio"
              id="activo"
              name="id_estado_materia"
              value="1"
              checked={editedMateriaData.id_estado_materia === "1"}
              onChange={(e) => handleRadioChange2(e)}
              style={{
                width: 20,
                height: 20,
                margin: "10px",
              }}
            />
            <label htmlFor="activo">Activo</label>

            <input
              type="radio"
              id="inactivo"
              name="id_estado_materia"
              value="2"
              checked={editedMateriaData.id_estado_materia === "2"}
              onChange={(e) => handleRadioChange2(e)}
              style={{
                width: 20,
                height: 20,
                margin: "10px",
              }}
            />
            <label htmlFor="inactivo">Inactivo</label>
          </div>
        </form>

        <div>
          <Button onClick={handleSaveEdit}>Guardar</Button>
          <Button onClick={handleEditModalClose}>Cancelar</Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalEdicionMaterias;
