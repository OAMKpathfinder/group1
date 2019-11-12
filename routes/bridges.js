var express = require('express');
var router = express.Router();
var bridges = require('../models/bridges');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(bridges,req,res)
});

module.exports = router;