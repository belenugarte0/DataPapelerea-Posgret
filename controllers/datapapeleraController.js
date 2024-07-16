const Datapapelera = require("../models/datapapelera");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await Datapapelera.getAll();

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
};
