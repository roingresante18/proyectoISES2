const {  DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Profesores = sequelize.define(
    "profesores", {
        id_profesor: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        id_usuario: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: "id_usuario",
            // foreingkey: "id_usuario",
        },

    }, {
        timestamps: false, // para que se pueda conectar a la bd seteamos en false, lo correcto es que lo tenga activado
    }
);



module.exports = Profesores;