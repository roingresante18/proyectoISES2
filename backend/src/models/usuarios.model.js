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
    },
   
    dni: {
      allowNull: false,
      type: DataTypes.INTEGER(8),
      field: "dni",
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
    
  },
  {
    timestamps: false, // para que se pueda conectar a la bd seteamos en false, lo correcto es que lo tenga activado
  }
);



module.exports = User;
