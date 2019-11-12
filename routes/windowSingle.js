var express = require('express');
var router = express.Router();
var windowSingle = require('../models/windowSingle');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(windowSingle,req,res)
});

module.exports = router;