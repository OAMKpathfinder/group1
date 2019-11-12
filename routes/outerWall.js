var express = require('express');
var router = express.Router();
var outerWall = require('../models/outerWall');

router.post('/', (req, res) => {
    outerWall.add(req.body, (err, count) => {
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
    del.deleteBasic(outerWall,req,res)
});

module.exports = router;