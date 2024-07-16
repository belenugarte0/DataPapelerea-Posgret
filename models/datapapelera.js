const db = require("../config/config");

const Datapapelera = {};

Datapapelera.getAll = () => {
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
    `;

  return db.manyOrNone(sql);
};

module.exports = Datapapelera;
