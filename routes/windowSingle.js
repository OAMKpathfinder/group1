var express = require("express");
var router = express.Router();
var windowSingle = require("../models/windowSingle");

//Update - requires windowSingle id
router.put("/:windowSingle_id", function(req, res, next) {
   windowSingle.updateWindowSingle(
    req.params.windowSingle_id,
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
