const { Sequelize } = require('sequelize');
const  { config } = require('../config/config');
// const setupModels = require('../../app/models');

const sequelize = new Sequelize(
  config.dbName, // name database
  config.dbUser, // user database
  config.dbPassword, // password database
    {
      host: config.dbHost,
      dialect: 'mysql' 
    }
);

try {
  sequelize.sync({ force: false });
  
} catch (error) {}
// sequelize.sync();
// setupModels(sequelize);

module.exports = sequelize;