const  Materias  = require ('../models/materias.model');

class MateriaService {

    constructor() {}

    async find() {
        const res = await Materias.findAll();
        return res;
    }

    async findOne(id) {
        const res = await Materias.findByPk(id);
        return res;
    }

    async create(data){
        const res = await Materias.create(data);
        return res;
    }

    async update(id, data) {
        const Materias = await this.findOne(id);
        const res = await Materias.update(data);
        return res;
    }
    async alta_baja(id, data) {
        const Materias = await this.findOne(id);
        const res = await Materias.update(data);
        return res;
    }

    async delete(id) {
        const models = await this.findOne(id);
        const res = await Materias.destroy();
        return res;
    }

}

module.exports = MateriaService;