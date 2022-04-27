/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('product', function(table) {
		table.increments('id').primary();
		table.string('name', 255).notNullable();
		table.float('price', 32, 2);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema
    .dropTable("product");
};
