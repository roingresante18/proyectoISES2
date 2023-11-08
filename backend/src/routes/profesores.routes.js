const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesores.controllers');

router
    .get('/',profesoresController.get)
    .get('/:id',profesoresController.getById)
    .post('/',profesoresController.create)
    .put('/:id',profesoresController.update)
    .delete('/:id',profesoresController._delete)
module.exports = router;