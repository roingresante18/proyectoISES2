const express = require('express');
const router = express.Router();
const carrerasController = require('../controllers/carreras.controllers');

router
    .get('/',carrerasController.get)
    .get('/:id',carrerasController.getById)
    .post('/',carrerasController.create)
    .put('/:id',carrerasController.update)
    .delete('/:id',carrerasController._delete)
module.exports = router;