// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development : {
		client     : 'postgresql',
		connection : {
			host     : '127.0.0.1',
			user     : 'ravi',
			password : null,
			database : 'turnip_test',
			charset  : 'utf8'
		},
		migrations : {
			tabelName : 'knex_migrations',
			directory : './db/migrations'
		},
		seeds      : {
			directory : './db/seeds'
		}
	}
};
