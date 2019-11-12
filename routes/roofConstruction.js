var express = require('express');
var router = express.Router();
var roofConstruction = require('../models/roofConstruction');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(roofConstruction,req,res)
});
module.exports = router;