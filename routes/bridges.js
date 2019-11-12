var express = require('express');
var router = express.Router();
var bridges = require('../models/bridges');

router.post('/', (req, res) => {
    bridges.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

module.exports = router;