const DatapapeleraController = require("../controllers/datapapeleraController");

module.exports = (app, upload) => {
  // TRAER DATOS
  app.get("/api/datapapelera/getAll/:status", DatapapeleraController.getAll);

  app.put(
    "/api/datapapelera/updateToRecibido/:id",
    DatapapeleraController.updateToRecibido
  );

  app.put(
    "/api/datapapelera/updateToDiseño/:id",
    DatapapeleraController.updateToDiseño
  );

  app.put(
    "/api/datapapelera/updateToCompletadoMerma/:id",
    DatapapeleraController.updateToCompletadoMerma
  );

  app.put(
    "/api/datapapelera/updateToAlmacen/:id",
    DatapapeleraController.updateToAlmacen
  );

  app.put(
    "/api/datapapelera/updateToDespacho/:id",
    DatapapeleraController.updateToDespacho
  );

  app.put(
    "/api/datapapelera/updateToCompletadoLogistica/:id",
    DatapapeleraController.updateToCompletadoLogistica
  );
};
