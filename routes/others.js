var express = require('express');
var router = express.Router();
var others = require('../models/others');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(others,req,res)
});

module.exports = router;