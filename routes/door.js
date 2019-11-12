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

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(door,req,res)
});

module.exports = router;