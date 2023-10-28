const  Profesores  = require ('../models/profesores.model');

class ProfesoresService {

    constructor() {}

    async find() {
        const res = await Profesores.findAll();
        return res;
    }

    async findOne(id) {
        const res = await Profesores.findByPk(id);
        return res;
    }

    async create(data){
        const res = await Profesores.create(data);
        return res;
    }

    async update(id, data) {
        const Profesores = await this.findOne(id);
        const res = await Profesores.update(data);
        return res;
    }
    async alta_baja(id, data) {
        const Profesores = await this.findOne(id);
        const res = await Profesores.update(data);
        return res;
    }

    async delete(id) {
        const models = await this.findOne(id);
        const res = await Profesores.destroy();
        return res;
    }

}

module.exports = ProfesoresService;