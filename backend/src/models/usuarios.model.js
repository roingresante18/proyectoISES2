const  {DataTypes}  = require("sequelize");
const sequelize = require("../database/database");

const User = sequelize.define(
  "usuarios",
  {
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11),
      field: "id_usuario",
      
    },
    clave: {
      allowNull: false,
      type: DataTypes.STRING(11),
      field: "clave",
    },
    dni: {
      allowNull: false,
      type: DataTypes.INTEGER(8),
      field: "dni",
    },
    nacionalidad: {
      allowNull: false,
      type: DataTypes.STRING(30),
      field: "nacionalidad",
    },
    direccion: {
      allowNull: false,
      type: DataTypes.STRING(30),
      field: "direccion",
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING(30),
      field: "nombre",
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING(30),
      field: "apellido",
    },
    correo1: {
      allowNull: false,
      type: DataTypes.STRING(30),
      field: "correo1",
    },
    correo2: {
      allowNull: true,
      type: DataTypes.STRING(30),
      field: "correo2",
    },
    telefono1: {
      allowNull: false,
      type: DataTypes.INTEGER(10),
      field: "telefono1",
    },
    telefono2: {
      allowNull: true,
      type: DataTypes.INTEGER(10),
      field: "telefono2",
    },
    fecha_nacimiento: {
      allowNull: false,
      type: DataTypes.DATEONLY, // DATE solo me trae fecha y hora, Con DATEONLY solo fecha
      field: "fecha_nacimiento",
    },
    id_tipo_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      field: "id_tipo_usuario",
    },
    id_estado_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      field: "id_estado_usuario",
    },
    alta_baja: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      field: "alta_baja",
    },
  },
  {
    timestamps: false, // para que se pueda conectar a la bd seteamos en false, lo correcto es que lo tenga activado
  }
);



module.exports = User;
