var express = require("express");
var router = express.Router();
var bridges = require('../models/bridges');
var DELETE = require('./DELETE');
var del = new DELETE();

router.post('/', (req, res) => {
    bridges.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
  })
});

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(bridges,req,res)
});

router.put("/:bridge_id", function(req, res, next) {
  bridges.updateBridge(req.params.bridge_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
