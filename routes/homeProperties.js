var express = require("express");
var router = express.Router();
var homeProperties = require('../models/homeProperties');
var DELETE = require('./DELETE');
var del = new DELETE();

router.post('/', (req, res) => {
    homeProperties.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(homeProperties,req,res)
});

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
