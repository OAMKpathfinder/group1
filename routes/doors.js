var express = require("express");
var router = express.Router();
var doors = require("../models/doors");

//Get doors - requires doors id
router.get("/:doors_id?", function(req, res, next) {
  if (req.params.doors_id) {
    doors.get(req.params.doors_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else if (rows.rowCount == 0) {
        res.send("No results found");
      } else {
        res.json(rows.rows[0]);
      }
    });
  } else {
    doors.getAll(function(err, rows) {
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

//Get all single doors that match doors id - requires doors id
router.get("/:doors_id/all", function(req, res, next) {
  doors.getAllSingles(req.params.doors_id, function(err, rows) {
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
  doors.add(req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

var DELETE = require("./DELETE");
var del = new DELETE();

router.delete("/:id", (req, res, next) => {
  del.deleteBasic(doors, req, res);
});

module.exports = router;
