var express = require("express");
var router = express.Router();
var bridges = require("../models/bridges");

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
