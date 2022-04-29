const express = require('express');
const router = express.Router();

router.use('/api', require('./api.js'));

router.get('/test', (req, res) => {
    res.send("inside /test");
})

module.exports = router;