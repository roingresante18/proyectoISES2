const sequelize = require("./database/database");
const app = require("./app.js");
const User = require("./models/usuarios.model");



const port = 3000 ;



async function main() {
  try {
    // await sequelize.authenticate();
    // require("./database/relaciones"); // si quitamos esta linea las relaciones no se crean automaticamente
    console.log("Authenticated successfully");
    console.log(User === sequelize.models.usuarios); // vemos si nuestro modelo coincide con el de la base de datos

    app.listen(port);
    console.log("App listening on port", port);
  } catch (error) {
    console.error("Error al conectarse a la base de datos: ", error);
  }
}

main();

