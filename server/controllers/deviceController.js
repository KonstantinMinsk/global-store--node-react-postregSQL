const { uuid } = require('uuid');
const path = require('path');

const {Device} = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files[0];
            const fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        const { brandId, typeId, limit, page } = req.query;
        const countPage = page || 1;
        const currentLimit = limit || 9;
        let offset = countPage * currentLimit - currentLimit;
        let devices;
        if (!brandId && !typeId) { 
            devices = await Device.findAndCountAll({ currentLimit, offset }) 
        }
        if (!brandId && typeId) { 
            devices = await Device.findAndCountAll({ where: { typeId }, currentLimit, offset }) 
        }
        if (brandId && !typeId) { 
            devices = await Device.findAndCountAll({ where: { brandId }, currentLimit, offset }) 
        }
        if (brandId && typeId) { 
            devices = await Device.findAndCountAll({ where: { brandId, typeId}, currentLimit, offset }) 
        }

        return res.json(devices)
    }

    async getOne(req, res) {

    }

}

module.exports = new DeviceController();