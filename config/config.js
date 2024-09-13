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
  host: "dpg-cri72j3v2p9s73blj62g-a",
  port: 5432,
  database: "api_papelera",
  user: "api_papelera_user",
  password: "LjcLpMjuMQFfRNGBBEL24ikBCjpdpStD",
};

const db = pgp(databaseConfig);
module.exports = db;
