const  Alumnos  = require ('../models/alumnos.model');

class AlumnoService {

    constructor() {}

    async find() {
        const res = await Alumnos.findAll();
        return res;
    }

    async findOne(id) {
        const res = await Alumnos.findByPk(id);
        return res;
    }

    async create(data){
        const res = await Alumnos.create(data);
        return res;
    }

    async update(id, data) {
        const Alumnos = await this.findOne(id);
        const res = await Alumnos.update(data);
        return res;
    }
    async alta_baja(id, data) {
        const Alumnos = await this.findOne(id);
        const res = await Alumnos.update(data);
        return res;
    }

    async delete(id) {
        const models = await this.findOne(id);
        const res = await Alumnos.destroy();
        return res;
    }

}

module.exports = AlumnoService;