const DatapapeleraController = require("../controllers/datapapeleraController");
const passport = require("passport");

module.exports = (app, upload) => {
  // TRAER DATOS
  app.get("/api/datapapelera/getAll", DatapapeleraController.getAll);

  app.put(
    "/api/datapapelera/updateToRecibido",
    DatapapeleraController.updateToRecibido
  );

  app.put(
    "/api/datapapelera/updateToDiseño",
    DatapapeleraController.updateToDiseño
  );

  app.put(
    "/api/datapapelera/updateToCompletadoMerma",
    DatapapeleraController.updateToCompletadoMerma
  );
  app.put(
    "/api/datapapelera/updateToAlmacen",
    DatapapeleraController.updateToAlmacen
  );
  app.put(
    "/api/datapapelera/updateToDespacho",
    DatapapeleraController.updateToDespacho
  );
  app.put(
    "/api/datapapelera/updateToCompletadoLogistica",
    DatapapeleraController.updateToCompletadoLogistica
  );
};
