var express = require("express");
var router = express.Router();
var users = require("../models/users");

router.put("/:user_id", function(req, res, next) {
  users.updateUser(req.params.user_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
