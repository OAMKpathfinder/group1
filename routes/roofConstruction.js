var express = require('express');
var router = express.Router();
var roofConstruction = require('../models/roofConstruction');

router.post('/', (req, res) => {
    roofConstruction.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

module.exports = router;