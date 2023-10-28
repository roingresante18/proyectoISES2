const express = require('express');

const usersRouter = require('./usuarios.routes')
const materiasRouter = require('./materias.routes')
const carrerasRouter = require('./carreras.routes')
const alumnosRouter = require('./alumnos.routes')
const profesoresRouter = require('./profesores.routes')
const administradoresRouter = require('./administradores.routes')

function routerApi(app){
 const router = express.Router();
 router.use('/materias', materiasRouter)
 router.use('/users', usersRouter)
 router.use('/carreras', carrerasRouter)
 router.use('/alumnos', alumnosRouter)
 router.use('/profesores', profesoresRouter)
 router.use('/administradores', administradoresRouter)

 app.use('/api/v1', router)
//  app.use('/api/v2', router)S

}

module.exports = routerApi;

