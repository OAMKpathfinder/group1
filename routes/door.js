var express = require('express');
var router = express.Router();
var door = require('../models/door');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(door,req,res)
});

module.exports = router;