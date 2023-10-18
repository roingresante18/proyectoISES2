const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Materias = sequelize.define(
  "materias",
     {
    id_materia:{
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
    id_tipo_materia: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      field: "id_tipo_materia",
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



module.exports = Materias;
