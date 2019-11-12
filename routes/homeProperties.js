var express = require('express');
var router = express.Router();
var homeProperties = require('../models/homeProperties');

router.post('/', (req, res) => {
    homeProperties.add(req.body, (err, count) => {
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
    del.deleteBasic(homeProperties,req,res)
});

module.exports = router;