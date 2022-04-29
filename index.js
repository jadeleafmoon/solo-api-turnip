'use strict';

let { products } = require('./data/products.json');

// initialize Express
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3030;

// Router
app.use(require('./routes'));



app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
