const express = require('express');

const usersRouter = require('./usuarios.routes')


function routerApi(app){
 const router = express.Router();
 
 router.use('/users', usersRouter)
 

 app.use('/api/v1', router)
//  app.use('/api/v2', router)S

}

module.exports = routerApi;

