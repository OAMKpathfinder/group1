var express = require('express');
var router = express.Router();
var windowSingle = require('../models/windowSingle');

router.post('/', (req, res) => {
    windowSingle.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

module.exports = router;