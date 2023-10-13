require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  dbPassword: process.env.DB_PASSWORD,
  dbNAME: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
};

module.exports =  config ;
