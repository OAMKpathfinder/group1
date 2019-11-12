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

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(groundFloor,req,res)
});
module.exports = router;