'use strict';


// initialize Express
require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3030;

// Router
app.use(require('./routes'));



app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
