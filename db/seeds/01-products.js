/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
	// Deletes ALL existing entries
	await knex('products').del();
	await knex('products').insert([
		{ id: 1, name: 'Ball', price: 5.0 },
		{ id: 2, name: 'Game', price: 10.0 },
		{ id: 3, name: 'Chocolate', price: 15.0 }
	]);
};
