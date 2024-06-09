const db = require('../config/config');

const Datapapelera = {};

Datapapelera.getAll = () => {

    const sql = `
        SELECT
            id,
            name,
            description,
            image
        FROM
            categories
        ORDER BY
            name
    `;

    return db.manyOrNone(sql);

}


module.exports = Datapapelera;