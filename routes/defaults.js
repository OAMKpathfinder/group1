var express = require("express");
var router = express.Router();
var defaults = require("../models/defaults");
var DELETE = require('./DELETE');
var del = new DELETE();

router.get("/:defaults_id?", function(req, res, next) {
  if (req.params.defaults_id) {
    defaults.getById(req.params.defaults_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else if (rows.rowCount == 0) {
        res.send("No results found");
      } else {
        res.json(rows.rows[0]);
      }
    });
  } else {
    defaults.getAll(function(err, rows) {
      if (err) {
        res.json(err);
      } else if (rows.rowCount == 0) {
        res.send("No results found");
      } else {
        res.json(rows.rows);
      }
    });
  }
});

router.post("/", (req, res) => {
  defaults.add(req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  del.deleteBasic(defaults, req, res);
});

//Update - requires door id
router.put("/:defaults_id", function(req, res, next) {
  defaults.updateDefaults(req.params.defaults_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;