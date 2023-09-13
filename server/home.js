const { Router } = require('express');
const jsonData = require('./response.json')
const router = Router()

router.get('/', (req, res) => {
    res.json(jsonData);
});

module.exports = router