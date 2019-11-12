var express = require('express');
var router = express.Router();
var users = require('../models/users');

router.post('/', (req, res) => {
    users.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});
var DELETE = require('./DELETE');
var del = new DELETE();

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(users,req,res)
});

module.exports = router;