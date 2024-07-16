const db = require("../config/config");

const Datapapelera = {};

Datapapelera.getAll = (limit = 10, offset = 0) => {
  const sql = `
    SELECT
        id,
        Codigo,
        OT,
        OTS,
        Cliente,
        Producto,
        Fecha_Carguio,
        Fecha_de_entrega,
        Cantidad_Requerida,
        Fecha_Produccion,
        Colores,
        Largo_Interno,
        Ancho_Interno,
        Alto_Interno,
        Calidad,
        Tipo_de_Caja,
        estado
    FROM
        pedidos
    ORDER BY
        Fecha_de_entrega DESC
    LIMIT $1 OFFSET $2
  `;

  return db.manyOrNone(sql, [limit, offset]);
};

module.exports = Datapapelera;
