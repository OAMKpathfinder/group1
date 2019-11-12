var express = require('express');
var router = express.Router();
var groundFloor = require('../models/groundFloor');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(groundFloor,req,res)
});
module.exports = router;