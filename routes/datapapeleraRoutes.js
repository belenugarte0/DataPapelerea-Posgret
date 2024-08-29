const DatapapeleraController = require("../controllers/datapapeleraController");

module.exports = (app) => {
  // TRAER DATOS
  app.get("/api/datapapelera/getAll/:status", DatapapeleraController.getAll);

  app.get(
    "/api/datapapelera/getPedidosRecientes/:zona",
    DatapapeleraController.getPedidosRecientes
  );

  app.get("/api/datapapelera/getZonas", DatapapeleraController.getZonas);

  app.get("/api/datapapelera/validateCodigo/:codigo", DatapapeleraController.getAll);

  app.put(
    "/api/datapapelera/updateToStatus/:id/:status",
    DatapapeleraController.updateToStatus
  );
};
