const promise = require("bluebird");
const options = {
  promiseLib: promise,
  query: (e) => {},
};

const pgp = require("pg-promise")(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function (stringValue) {
  return stringValue;
});
//LOCAL
/*
const databaseConfig = {
  host: "127.0.0.1",
  port: 5432,
  database: "bddatabase",
  user: "postgres",
  password: "lsmSantander76",
};*/

//PRODUCCION
const databaseConfig = {
  host: "dpg-cq9vpv2ju9rs73bble3g-a",
  port: 5432,
  database: "datapapelera_c5ew",
  user: "datapapelera_c5ew_user",
  password: "J1Xe0kQokDqeVcbummpyVgcwqNXVTBSV",
};

const db = pgp(databaseConfig);
module.exports = db;
