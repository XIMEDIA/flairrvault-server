const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST_VAULT,
    port: process.env.DB_PORT_VAULT,
    user : process.env.DB_USER_VAULT,
    password : process.env.DB_PASS_VAULT ? process.env.DB_PASS_VAULT : '',
    database : process.env.DB_NAME_VAULT
  }
});

module.exports = {
  knex,
};