'use strict';

const { products } = require('./data/products.json');

const express = require('express');
const app = express();
app.use(express.json());
const PORT = 4040;

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

app.patch('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;

    const foundProduct = products.find(product => product.id === id);
    
    for (const key in updates) {
        foundProduct[key] = updates[key];
    }

    res.status(200).send(`The product with id = ${id} has been updated`);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
