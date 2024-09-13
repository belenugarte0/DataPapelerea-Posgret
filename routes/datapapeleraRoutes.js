const DatapapeleraController = require("../controllers/datapapeleraController");

module.exports = (app) => {
  // TRAER DATOS
  app.get("/api/datapapelera/getAll/:status", DatapapeleraController.getAll);
  app.get("/api/datapapelera/findByStatus/:status", DatapapeleraController.findByStatus);

  app.get(
    "/api/datapapelera/getPedidosRecientes/:zonas",
    DatapapeleraController.getPedidosRecientes
  );

  app.get("/api/datapapelera/getZonas", DatapapeleraController.getZonas);

  app.get("/api/datapapelera/validateCodigo/:codigo", DatapapeleraController.validateCodigo);
  
  app.put(
    "/api/datapapelera/updateToStatus/:id/:status",
    DatapapeleraController.updateToStatus
  );
  app.put(
    "/api/datapapelera/updatePlanning",
    DatapapeleraController.updatePlanning
  );
};