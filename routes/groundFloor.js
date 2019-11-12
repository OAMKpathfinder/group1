var express = require('express');
var router = express.Router();
var groundFloor = require('../models/groundFloor');

router.post('/', (req, res) => {
    groundFloor.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

module.exports = router;