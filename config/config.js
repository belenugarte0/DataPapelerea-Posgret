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
  host: "dpg-cqtr213v2p9s73ad5jc0-a",
  port: 5432,
  database: "datapapelera_n0ff",
  user: "datapapelera_n0ff_user",
  password: "peVsQzwmff8Xg6sn5J8Vrk2wWfIS29sX",
};

const db = pgp(databaseConfig);
module.exports = db;
