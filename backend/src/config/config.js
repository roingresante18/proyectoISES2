require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  dbPassword: process.env.DB_PASSWORD || '',
  dbNAME: process.env.DB_NAME || 'bdinscripciones',
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER || 'root',
};

module.exports =  config ;
