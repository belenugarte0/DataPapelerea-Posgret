const db = require("../config/config");

const Order = {};

Order.findByStatus = (status) => {
  const sql = `
   SELECT
        id,
        Codigo,
        Cliente,
        Producto,
        Fecha_de_entrega,
        Cantidad_Requerida,
        Colores,
        Largo_Interno,
        Ancho_Interno,
        Calidad,
        Tipo_de_Caja,
        estado
    FROM
        pedidos
    WHERE  estado = $1
    ORDER BY
        id
    `;

  return db.manyOrNone(sql, status);
};

module.exports = Order;
