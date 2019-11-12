var express = require('express');
var router = express.Router();
var windowAll = require('../models/windowAll');

router.post('/', (req, res) => {
    windowAll.add(req.body, (err, count) => {
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
    del.deleteBasic(windowAll,req,res)
});

module.exports = router;