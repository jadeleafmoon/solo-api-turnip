const knexConfig = require('./knexfile');
const config = knexConfig[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);

module.exports = knex;