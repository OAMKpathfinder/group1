var express = require('express');
var router = express.Router();
var users = require('../models/users');

var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(users,req,res)
});

module.exports = router;