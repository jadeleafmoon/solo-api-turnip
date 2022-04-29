const express = require('express');
const router = express.Router();

// initialize Knex
const knexConfig = require('../knexfile');
const config = knexConfig[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);

// Endpoints
router.get('/', (req, res) => {
	res.send('Hello and welcome to the Turnip API!');
});

router.get('/products', (req, res) => {
	knex('products')
		.select({
			id    : 'id',
			name  : 'name',
			price : 'price'
		})
		.then((result) => {
			res.status(200).send(result);
		});
});

router.post('/products', (req, res) => {
	const newProduct = req.body;

	knex('products').insert(newProduct).returning('*').then((result) => {
		res.status(201).send(`The product ${result[0].name} has been added`);
	});
});

router.patch('/products/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const productUpdates = req.body;

	knex('products')
		.where('id', '=', id)
		.update(productUpdates)
		.returning('*')
		.then((result) => {
			res
				.status(200)
				.send(
					`The product ${productUpdates.name} with id ${id} has been updated`
				);
		});
});

router.delete('/products/:id', (req, res) => {
	const id = parseInt(req.params.id);

	return knex('products')
		.where('id', '=', id)
		.del()
		.returning('*')
		.then((result) => {
			console.log('🔥 DEL result:', result);
			res
				.status(200)
				.send(`The product ${result[0].name} with id ${id} has been deleted`);
		});

});

module.exports = router;