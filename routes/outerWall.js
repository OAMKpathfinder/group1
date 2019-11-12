var express = require("express");
var router = express.Router();
var outerWall = require("../models/outerWall");

//Update - requires outerWall id
router.put("/:outerWall_id", function(req, res, next) {
  console.log(req.body, req.params.outerWall_id);
  outerWall.updateOuterWall(req.params.outerWall_id, req.body, function(
    err,
    rows
  ) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
