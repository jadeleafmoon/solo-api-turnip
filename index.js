'use strict';

const { products } = require('./data/products.json');


const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get("/products", (req, res) => {
    res.status(200).send(products);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
