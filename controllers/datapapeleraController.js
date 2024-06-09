const { getAll } = require('../models/datapapelera');
const Datapapelera = require('../models/datapapelera');
const storage = require('../utils/cloud_storage');

module.exports = {

    async getAll(req, res, next) {

        try {

            const data = await Datapapelera.getAll();

            return res.status(201).json(data);

        } catch (error) {
            console.log('Error', error);

            return res.status(501).json({
                success: false,
                message: 'Hubo un error al listar los Pedidos',
                error: error
            });
        }
    }
}