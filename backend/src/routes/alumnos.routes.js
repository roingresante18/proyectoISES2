const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnos.controllers');

router
    .get('/',alumnosController.get)
    .get('/:id',alumnosController.getById)
    .post('/',alumnosController.create)
    .put('/:id',alumnosController.update)
    .delete('/:id',alumnosController._delete)
module.exports = router;