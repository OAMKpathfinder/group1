var express = require('express');
var router = express.Router();
var doors = require('../models/doors');

router.post('/', (req, res) => {
    doors.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

module.exports = router;