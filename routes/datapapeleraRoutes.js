const DatapapeleraController = require('../controllers/datapapeleraController');
const passport = require('passport');

module.exports = (app, upload) => {

    // TRAER DATOS
    app.get('/api/datapapelera/getAll', DatapapeleraController.getAll);

}