var express = require("express");
var router = express.Router();
var bridges = require('../models/bridges');

router.post('/', (req, res) => {
  bridges.add(req.body, (err, count) => {
    if (err) {
      res.json(err)
    } else {
      res.json(req.body)
    }
  })
});


var DELETE = require('./DELETE');
var del = new DELETE();
router.delete('/:id', (req, res, next) => {
  del.deleteBasic(bridges, req, res)
});


var GET = require('./GET');
var get = new GET();
router.get('/:id?', (req, res, next) => {
  if (req.params.id) {
    get.getById(bridges, req, res);
  }
  else {
    get.getAll(bridges, req, res);
  }
});

router.put("/:bridge_id", function (req, res, next) {
  bridges.updateBridge(req.params.bridge_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
