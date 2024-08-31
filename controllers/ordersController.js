const Order = require('../models/order');


module.exports = {


    async findByStatus(req, res, next) {

        try {
            const status = req.params.status;
            let data = await Order.findByStatus(status);

            console.log('Order: ', data);
            return res.status(201).json(data);
        } 
        catch (error) {
            console.log(`Error ${error}`);    
            return res.status(501).json({
                message: 'Hubo un error al tratar de obtener las ordenes por estado',
                error: error,
                success: false
            })
        }

    },

    
}
