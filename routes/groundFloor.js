var express = require("express");
var router = express.Router();
var groundFloor = require("../models/groundFloor");

//Update - requires groundFloor id
router.put("/:groundFloor_id", function(req, res, next) {
  groundFloor.updateGroundFloor(req.params.groundFloor_id, req.body,
    function(err,rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});

module.exports = router;
