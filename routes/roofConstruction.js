var express = require("express");
var router = express.Router();
var roofConstruction = require("../models/roofConstruction");

//Update - requires roofConstruction id
router.put("/:roofConstruction_id", function(req, res, next) {
  roofConstruction.updateRoofConstruction(req.params.roofConstruction_id, req.body,
    function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});

module.exports = router;
