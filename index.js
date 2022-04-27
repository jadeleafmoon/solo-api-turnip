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
const knex = require('knex');
const database = knex(config);

// Endpoints
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/products', (req, res) => {
	res.status(200).send(products);
});

app.get('/testdb', (req, res) => {
	database('products')
		.select({
			id    : 'id',
			name  : 'name',
			price : 'price'
		})
		.then((value) => {
			console.log('🔥 value', value);
            res.send(value);
		});
});

app.post('/products', (req, res) => {
	const newProduct = req.body;
	products.push(newProduct);
	res.status(200).send(`The product ${newProduct.name} has been added.`);
});

app.patch('/products/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const updates = req.body;

	const foundProduct = products.find((product) => product.id === id);

	for (const key in updates) {
		foundProduct[key] = updates[key];
	}

	res.status(200).send(`The product with id = ${id} has been updated`);
});

app.delete('/products/:id', (req, res) => {
	const id = parseInt(req.params.id);

	products = products.filter((product) => product.id !== id);

	res.send(`Item with id = ${id} has been deleted.`);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
