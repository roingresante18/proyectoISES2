import React from "react";
import { Modal, Button } from "@mui/material";
// import UserTable from  "./ListarUsuarios";


function ModalEdicion(props) {
  const {
    open,
    handleClose,
    editedUserData,
    handleSaveEdit,
    handleEditModalClose,
    handleRadioChange,
    handleRadioChange2,
    setSelectedUser,
    setEditedUserData
  } = props;
  const modalStyles = {
   
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
    padding: "20px",

  };
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="edit-modal" style={modalStyles}>
        <h2>Editar Usuario</h2>
        <form>
            <div>
                  <label htmlFor="dni">DNI:</label>
                  <input
                    type="text"
                    id="dni"
                    name="dni"
                    value={editedUserData.dni}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        dni: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={editedUserData.nombre}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        nombre: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="apellido">Apellido:</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={editedUserData.apellido}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        apellido: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="direccion">Dirección:</label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={editedUserData.direccion}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        direccion: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="correo1">Correo 1:</label>
                  <input
                    type="text"
                    id="correo1"
                    name="correo1"
                    value={editedUserData.correo1}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        correo1: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="correo2">Correo 2:</label>
                  <input
                    type="text"
                    id="correo2"
                    name="correo2"
                    value={editedUserData.correo2}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        correo2: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="telefono1">Teléfono 1:</label>
                  <input
                    type="text"
                    id="telefono1"
                    name="telefono1"
                    value={editedUserData.telefono1}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        telefono1: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="telefono2">Teléfono 2:</label>
                  <input
                    type="text"
                    id="telefono2"
                    name="telefono2"
                    value={editedUserData.telefono2}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        telefono2: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                  <input
                    type="text"
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    value={editedUserData.fecha_nacimiento}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        fecha_nacimiento: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="nacionalidad">Nacionalidad:</label>
                  <input
                    type="text"
                    id="nacionalidad"
                    name="nacionalidad"
                    value={editedUserData.nacionalidad}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        nacionalidad: e.target.value,
                      })
                    }
                    style={{
                      margin:"10px",
                      textAlign:"center"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="id_tipo_usuario">Tipo de Usuario:</label>
                      <input
                        type="radio"
                        id="administrador"
                        name="id_tipo_usuario"
                        value="1"
                        checked={editedUserData.id_tipo_usuario === "1"}
                        onChange={(e) => handleRadioChange(e)}
                        style={{
                          width:20,
                          height:20,
                          margin:"10px",
                        }}
                      />
                  <label htmlFor="administrador">Administrador</label>

                      <input
                        type="radio"
                        id="preceptor"
                        name="id_tipo_usuario"
                        value="2"
                        checked={editedUserData.id_tipo_usuario === "2"}
                        onChange={(e) => handleRadioChange(e)}
                        style={{
                          width:20,
                          height:20,
                          
                        }}
                      />
                  <label htmlFor="preceptor">Preceptor</label>

                      <input
                        type="radio"
                        id="alumno"
                        name="id_tipo_usuario"
                        value="3"
                        checked={editedUserData.id_tipo_usuario === "3"}
                        onChange={(e) => handleRadioChange(e)}
                        style={{
                          width:20,
                          height:20,
                        }}
                      />
                  <label htmlFor="alumno">Alumno/a</label>
                </div>

                <div>
                  <label htmlFor="id_estado_usuario">Estado Usuario:</label>
                      <input
                        type="radio"
                        id="activo"
                        name="id_estado_usuario"
                        value="1"
                        checked={editedUserData.id_estado_usuario === "1"}
                        onChange={(e) => handleRadioChange2(e)}
                        style={{
                          width:20,
                          height:20,
                          margin:"10px",
                        }}
                      />
                  <label htmlFor="administrador">Activo</label>

                      <input
                        type="radio"
                        id="inactivo"
                        name="id_estado_usuario"
                        value="2"
                        checked={editedUserData.id_estado_usuario === "2"}
                        onChange={(e) => handleRadioChange2(e)}
                        style={{
                          width:20,
                          height:20,
                          margin:"10px",
                        }}
                      />
                  <label htmlFor="preceptor">Inactivo</label>
                </div>
        </form>

        <div >
          <Button onClick={handleSaveEdit}>Guardar</Button>
          <Button onClick={handleEditModalClose}>Cancelar</Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalEdicion;
