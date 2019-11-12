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
var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(bridges,req,res)
});

module.exports = router;