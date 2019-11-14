var express = require("express");
var router = express.Router();
var groundFloor = require('../models/groundFloor');
var DELETE = require('./DELETE');
var del = new DELETE();

router.post('/', (req, res) => {
    groundFloor.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(groundFloor,req,res)
});

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
