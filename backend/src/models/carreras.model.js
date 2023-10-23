const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Carreras = sequelize.define(
  "carreras",
     {
    id_carrera:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre'
    },
    id_estado_carrera: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      field: "id_estado_carrera",
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



module.exports = Carreras;
