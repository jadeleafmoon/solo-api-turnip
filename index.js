'use strict';

let { products } = require('./data/products.json');

// initialize Express
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3030;

// initialize Knex
const knexConfig = require('./knexfile');
const config = knexConfig[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);

// Endpoints
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/products', (req, res) => {
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

app.post('/products', (req, res) => {
	const newProduct = req.body;

	knex('products').insert(newProduct).returning('*').then((result) => {
		res.status(201).send(`The product ${result[0].name} has been inserted`);
	});
});

app.patch('/products/:id', (req, res) => {
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

app.delete('/products/:id', (req, res) => {
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
	// products = products.filter((product) => product.id !== id);

	// res.send(`Item with id = ${id} has been deleted.`);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
