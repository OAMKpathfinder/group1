var express = require("express");
var router = express.Router();
var windowAll = require("../models/windowAll");
var DELETE = require("./DELETE");
var del = new DELETE();

//Get windowAll - requires windowAll id
router.get("/:windowAll_id?", function(req, res, next) {
  if (req.params.windowAll_id) {
    windowAll.get(req.params.windowAll_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else if (rows.rowCount == 0) {
        res.send("No results found");
      } else {
        res.json(rows.rows[0]);
      }
    });
  } else {
    windowAll.getAll(function(err, rows) {
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

//Get windowSingles that match windowAll id - requires windowAll id
router.get("/:windowAll_id/all", function(req, res, next) {
  windowAll.getAllSingles(req.params.windowAll_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else if (rows.rowCount == 0) {
      res.send("No results found");
    } else {
      res.json(rows.rows);
    }
  });
});

router.post("/", (req, res) => {
  windowAll.add(req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  del.deleteBasic(windowAll, req, res);
});

module.exports = router;
