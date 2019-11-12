var express = require('express');
var router = express.Router();
var doors = require('../models/doors');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(doors,req,res)
});
module.exports = router;