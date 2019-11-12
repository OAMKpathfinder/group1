var express = require('express');
var router = express.Router();
var others = require('../models/others');

router.post('/', (req, res) => {
    others.add(req.body, (err, count) => {
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
    del.deleteBasic(others,req,res)
});

module.exports = router;