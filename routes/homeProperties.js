var express = require('express');
var router = express.Router();
var homeProperties = require('../models/homeProperties');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(homeProperties,req,res)
});

module.exports = router;