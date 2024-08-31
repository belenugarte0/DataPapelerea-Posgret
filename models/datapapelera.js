
const db = require("../config/config");

const Order = {};

Order.getAll = (status) => {
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

Order.getPedidosRecientes = (zonas) => {
  const sql = `
    SELECT * FROM listar_pedidos_dia($1);
  `;

  return db.manyOrNone(sql, [zonas]);
};

Order.getZonas = () => {
  const sql = `
    SELECT * FROM listar_zonas();
  `;

  return db.manyOrNone(sql);
};

Order.validateCodigo  = (codigo) => {
  const sql = `
    SELECT 
      COUNT(*) > 0 AS exists 
    FROM 
      pedidos 
    WHERE 
      Codigo = $1;
  `;

  return db.oneOrNone(sql, codigo);
};


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

Order.updatePlanning = (id) => {
  const sql = `
  UPDATE
  pedidos
  SET
  estado = 'Despacho'
  WHERE
  id = ANY($1::int[])
  `;
  return db.none(sql, [id]);
};
module.exports = Order;
