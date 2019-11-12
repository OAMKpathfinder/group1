var express = require('express');
var router = express.Router();
var door = require('../models/door')

router.post('/', (req, res) => {
    door.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

module.exports = router;