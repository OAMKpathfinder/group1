var express = require("express");
var router = express.Router();
var door = require("../models/door");

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
 