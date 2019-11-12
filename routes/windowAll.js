var express = require('express');
var router = express.Router();
var windowAll = require('../models/windowAll');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(windowAll,req,res)
});

module.exports = router;