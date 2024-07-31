const DatapapeleraController = require("../controllers/datapapeleraController");

module.exports = (app) => {
  // TRAER DATOS
  app.get("/api/datapapelera/getAll/:status", DatapapeleraController.getAll);

  app.put(
    "/api/datapapelera/updateToStatus/:id/:status",
    DatapapeleraController.updateToStatus
  );  
};
