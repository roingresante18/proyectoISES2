const  Administradores  = require ('../models/administradores.model');

class AdministradoresService {

    constructor() {}

    async find() {
        const res = await Administradores.findAll();
        return res;
    }

    async findOne(id) {
        const res = await Administradores.findByPk(id);
        return res;
    }

    async create(data){
        const res = await Administradores.create(data);
        return res;
    }

    async update(id, data) {
        const Administradores = await this.findOne(id);
        const res = await Administradores.update(data);
        return res;
    }
    async alta_baja(id, data) {
        const Administradores = await this.findOne(id);
        const res = await Administradores.update(data);
        return res;
    }

    async delete(id) {
        const models = await this.findOne(id);
        const res = await Administradores.destroy();
        return res;
    }

}

module.exports = AdministradoresService;