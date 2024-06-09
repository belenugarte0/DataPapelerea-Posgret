const db = require('../config/config');

const Datapapelera = {};

Datapapelera.getAll = () => {

    const sql = `
SELECT
    CAST(id AS CHAR) AS id,
    CAST(Codigo AS CHAR) AS Codigo,
    CAST(OT AS CHAR) AS OT,
    CAST(OTS AS CHAR) AS OTS,
    Cliente,
    Producto,
    Fecha_Carguio,
    Fecha_de_entrega,
    CAST(Cantidad_Requerida AS CHAR) AS Cantidad_Requerida,
    Fecha_Produccion,
    CAST(Colores AS CHAR) AS Colores,
    CAST(Largo_Interno AS CHAR) AS Largo_Interno,
    CAST(Ancho_Interno AS CHAR) AS Ancho_Interno,
    CAST(Alto_Interno AS CHAR) AS Alto_Interno,
    Calidad,
    Tipo_de_Caja
FROM
    pedidos

    `;

    return db.manyOrNone(sql);

}


module.exports = Datapapelera;