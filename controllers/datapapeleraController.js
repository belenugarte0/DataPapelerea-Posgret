const Order = require("../models/datapapelera");

module.exports = {
  async getAll(req, res, next) {
    try {
      const status = req.params.status;
      const data = await Order.getAll(status);

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

  async updateToStatus(req, res, next) {
    try {
      const id = req.params.id;
      const status = req.params.status;
      await Order.update({ id, status });
      return res.status(201).json({
        success: true,
        message: "LA ORDEN SE ACTUALIZÓ CORRECTAMENTE",
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

  async getPedidosRecientes(req, res, next) {
    try {
      const zonasParam = req.params.zonas;
      const zonasArray = zonasParam.split(",");

      const data = await Order.getPedidosRecientes(zonasArray);
      const response = {
        routePlannings: data,
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

  async getZonas(req, res, next) {
    try {
      const data = await Order.getZonas();
      const response = {
        routePlannings: data,
      };

      return res.status(200).json(response);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({
        success: false,
        message: "Hubo un error al listar las Zonas",
        error: error.message,
      });
    }
  },
  async validateCodigo(req, res, next) {
    try {
      const codigo = req.params.codigo;
      const exists = await Order.validateCod(codigo);

      if (exists) {
        return res.status(200).json({
          success: true,
          message: "El código ya existe.",
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "El código es válido y no está en uso.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({
        success: false,
        message: "Hubo un error al validar el código",
        error: error.message,
      });
    }
  },
};
