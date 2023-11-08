const express = require('express');
const router = express.Router();
const administradoresController = require('../controllers/administradores.controllers');

router
    .get('/',administradoresController.get)
    .get('/:id',administradoresController.getById)
    .post('/',administradoresController.create)
    .put('/:id',administradoresController.update)
    .delete('/:id',administradoresController._delete)
module.exports = router;