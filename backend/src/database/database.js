require("dotenv").config();
const { Sequelize } = require('sequelize');
const config = require('../config/config');
// const setupModels = require('../../app/models')
const sequelize = new Sequelize(
  
  config.dbNAME, // name database
  config.dbUser, // user database
  config.dbPassword , // password database
    {
      host: config.dbHost,
      dialect: 'mysql' 
    }
);

try {
  console.log("Sincronizando sequelize");
  sequelize.sync({ force: false });
  
} catch (error) {
console.error('error al conectar a la base de datos',error);
}
// sequelize.sync();
// setupModels(sequelize);

module.exports = sequelize;