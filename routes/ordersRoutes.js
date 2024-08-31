const OrdersController = require('../controllers/ordersController');
const passport = require('passport');

module.exports = (app) => {

   app.get('/api/orders/findByStatus/:status', OrdersController.findByStatus);
   
}