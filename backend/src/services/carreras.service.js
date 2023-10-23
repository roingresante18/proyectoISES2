const  Carreras  = require ('../models/carreras.model');

class CarreraService {

    constructor() {}

    async find() {
        const res = await Carreras.findAll();
        return res;
    }

    async findOne(id) {
        const res = await Carreras.findByPk(id);
        return res;
    }

    async create(data){
        const res = await Carreras.create(data);
        return res;
    }

    async update(id, data) {
        const Carreras = await this.findOne(id);
        const res = await Carreras.update(data);
        return res;
    }
    async alta_baja(id, data) {
        const Carreras = await this.findOne(id);
        const res = await Carreras.update(data);
        return res;
    }

    async delete(id) {
        const models = await this.findOne(id);
        const res = await Carreras.destroy();
        return res;
    }

}

module.exports = CarreraService;