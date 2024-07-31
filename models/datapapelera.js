const db = require("../config/config");

const Order = {};

Order.getAll = (estado) => {
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
    WHERE  estado = $2
    ORDER BY
        id
  `;

  return db.manyOrNone(sql, [estado]);
};

Order.update = (order) => {
  const sql = `
    UPDATE
        pedidos
    SET
        estado = $2
    WHERE
        id = $1
  `;

  return db.none(sql, [order.id, order.status]);
};

module.exports = Order;
