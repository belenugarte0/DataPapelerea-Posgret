const db = require("../config/config");

const Order = {};

Order.getAll = (limit, offset) => {
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
        zona,
		    coordenadas,
        estado
    FROM
        pedidos
    ORDER BY
        id
    LIMIT $1 OFFSET $2
  `;

  return db.manyOrNone(sql, [limit, offset]);
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
