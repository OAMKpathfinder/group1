var express = require("express");
var router = express.Router();
var homeProperties = require("../models/homeProperties");

//Update - requires homeProperties id
router.put("/:homeProperties_id", function(req, res, next) {
  homeProperties.updateHomeProperties(
    req.params.homeProperties_id,
    req.body,
    function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    }
  );
});

module.exports = router;
