var express = require("express");
var router = express.Router();
var door = require("../models/door");
var DELETE = require("./DELETE");
var del = new DELETE();

//Get door - requires door id
router.get("/:door_id?", function(req, res, next) {
  if (req.params.door_id) {
    door.get(req.params.door_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else if (rows.rowCount == 0) {
        res.send("No results found");
      } else {
        res.json(rows.rows[0]);
      }
    });
  } else {
    door.getAll(function(err, rows) {
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
  door.add(req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  del.deleteBasic(door, req, res);
});

//Update - requires door id
router.put("/:door_id", function(req, res, next) {
  door.updateDoor(req.params.door_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
