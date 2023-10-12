require('dotenv').config();

const config ={
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbPassword:  process.env.DB_PASSWORD,
    dbHost:  process.env.DB_HOST,
    dbName:  process.env.DB_NAME,
    dbPort:  process.env.DB_PORT,
    dbUser: process.env.DB_USER,
}

module.exports = {config};