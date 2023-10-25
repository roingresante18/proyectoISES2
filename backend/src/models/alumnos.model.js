const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Alumnos = sequelize.define(
  "alumnos",
     {
    id_alumno:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    legajo: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'legajo'
    },
    fecha_inscripcion: {
      allowNull: false,
      type: DataTypes.DATE,
      field:'fecha_inscripcion'
  },
    id_carrera: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      field: "id_carrera",
    },
    id_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      field: "id_usuario",
      // foreingkey: "id_usuario",
    },
    
  },
  {
    timestamps: false, // para que se pueda conectar a la bd seteamos en false, lo correcto es que lo tenga activado
  }
);



module.exports = Alumnos;
