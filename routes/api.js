// The base of this router is /api

const express = require('express');
const router = express.Router();

// Initialize Knex
const knex = require('../knex');

// Endpoints
// This route would be /api
router.get('/', (req, res) => {
	res.send('Hello and welcome to the Turnip API! ');
});

// This route would be /api/products
router.get('/products', (req, res) => {
	let limit = req.query.limit;
	
	if (req.query.limit) {
		knex('products')
			.select()
			.limit(limit)
			.then((result) => {
				res.status(200).send(result);
			});
	} else {
		knex('products')
			.select()
			.then((result) => {
				res.status(200).send(result);
			});
	}
});

router.get('/products/:id', (req, res) => {
    const id = req.params.id;

	knex('products')
		.select()
		.where('id', '=', id)
		.returning('*')
		.then((result) => {
			res.status(200).send(result);
		});
});


router.post('/products', (req, res) => {
	const newProduct = req.body;

	knex('products')
		.insert(newProduct)
		.returning('*')
		.then((result) => {
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
			res.status(200)
				.send(`The product ${productUpdates.name} with id ${id} has been updated`);
		});
});

router.delete('/products/:id', (req, res) => {
	const id = parseInt(req.params.id);

	return knex('products')
		.where('id', '=', id)
		.del()
		.returning('*')
		.then((result) => {
			res.status(200)
				.send(`The product ${result[0].name} with id ${id} has been deleted`);
		});
});


module.exports = router ;
