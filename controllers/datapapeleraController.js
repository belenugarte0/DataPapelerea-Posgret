const Order = require("../models/datapapelera");

module.exports = {
  async getAll(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 10;
      const offset = parseInt(req.query.offset) || 0;

      const data = await Order.getAll(limit, offset);

      const response = {
        orders: data,
      };

      return res.status(200).json(response);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({
        success: false,
        message: "Hubo un error al listar los Pedidos",
        error: error.message,
      });
    }
  },
  async updateToRecibido(req, res, next) {
    try {
      const id = req.params.id;
      const order = { id, status: "Diseño" };
      await Order.update(order);

      return res.status(201).json({
        success: true,
        message: "La orden se actualizó a Diseño correctamente",
      });
    } catch (error) {
      console.log(`Error ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error actualizando la orden a Recibido",
        error: error,
      });
    }
  },
  async updateToDiseño(req, res, next) {
    try {
      const id = req.params.id;
      const order = { id, status: "Completado Merma" };
      await Order.update(order);

      return res.status(201).json({
        success: true,
        message: "La orden se actualizó a Completado Merma correctamente",
      });
    } catch (error) {
      console.log(`Error ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error actualizando la orden a Diseño",
        error: error,
      });
    }
  },
  async updateToCompletadoMerma(req, res, next) {
    try {
      let order = req.body;
      order.status = "Almacen";
      await Order.update(order);

      return res.status(201).json({
        success: true,
        message: "La orden se actualizó a Almacen correctamente",
      });
    } catch (error) {
      console.log(`Error ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error actualizando la orden a Completado Merma",
        error: error,
      });
    }
  },
  async updateToAlmacen(req, res, next) {
    try {
      const id = req.params.id;
      const order = { id, status: "Despacho" };
      await Order.update(order);

      return res.status(201).json({
        success: true,
        message: "La orden se actualizó a Despacho correctamente",
      });
    } catch (error) {
      console.log(`Error ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error actualizando la orden a Almacen",
        error: error,
      });
    }
  },
  async updateToDespacho(req, res, next) {
    try {
      const id = req.params.id;
      const order = { id, status: "Completado Logistica" };
      await Order.update(order);

      return res.status(201).json({
        success: true,
        message: "La orden se actualizó a Completado Logistica correctamente",
      });
    } catch (error) {
      console.log(`Error ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error actualizando la orden a Despacho",
        error: error,
      });
    }
  },
  async updateToCompletadoLogistica(req, res, next) {
    try {
      const id = req.params.id;
      const order = { id, status: "Completado Logistica" };
      await Order.update(order);

      return res.status(201).json({
        success: true,
        message: "La orden se actualizó a Completado Logistica correctamente",
      });
    } catch (error) {
      console.log(`Error ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error actualizando la orden a Completado Logistica",
        error: error,
      });
    }
  },
};
