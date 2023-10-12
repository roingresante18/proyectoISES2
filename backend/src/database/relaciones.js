const tipoUser = require("../models/tipo_usuario");
const User = require("../models/usuarios.model");
const estadoUser = require("../models/estado_usuario");

try {
  // un usuario tiene muchos tipos de usuario
  tipoUser.hasMany(User, {
    foreignKey: "id_tipo_usuario",
  });
  User.belongsTo(tipoUser, {
    foreignKey: "id_tipo_usuario",
  });

  //un usuario puede tener un estado de usuario
  estadoUser.hasOne(User, {
    foreignKey: "id_estado_usuario",
  });
  User.belongsTo(estadoUser, {
    foreignKey: "id_estado_usuario",
  });

  console.log("Estoy en relaciones");
} catch (error) {}

module.exports = {
  tipoUser,
  User,
  estadoUser,
};
