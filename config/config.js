const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});
//LOCAL

const databaseConfig = {
    'host': '127.0.0.1',
    'port': 5432,
    'database': 'datapapelera',
    'user': 'postgres',
    'password': 'lsmSantMont76'
};

//PRODUCCION
/*const databaseConfig = {
    'host': 'bdlogistica.ch242muoknlx.us-east-2.rds.amazonaws.com',
    'port': 5432,
    'database': 'bdlogistica',
    'user': 'postgres',
    'password': 'lsmSantander76'
};*/

const db = pgp(databaseConfig);
module.exports = db;