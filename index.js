'use strict';

const { products } = require('./data/products.json');

const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/products', (req, res) => {
	res.status(200).send(products);
});

app.post('/products', (req, res) => {
	const newProduct = req.body;
	products.push(newProduct);
	res.status(200).send(`The product ${newProduct.name} has been added.`)
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
