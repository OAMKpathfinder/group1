var express = require("express");
var router = express.Router();
var outerWall = require("../models/outerWall");

router.post('/', (req, res) => {
  outerWall.add(req.body, (err, count) => {
    if (err) {
      res.json(err)
    } else {
      res.json(req.body)
    }
  })
});

var DELETE = require('./DELETE');
var del = new DELETE();
router.delete('/:id', (req,res,next) => {
    del.deleteBasic(outerWall,req,res)
});

var GET = require('./GET');
var get = new GET();
router.get('/:id?', (req,res,next) => {
  if(req.params.id){
    get.getById(outerWall,req,res);
  }
  else{
    get.getAll(outerWall,req,res);
  }
});

//Update - requires outerWall id
router.put("/:outerWall_id", function(req, res, next) {
  outerWall.updateOuterWall(req.params.outerWall_id, req.body, function(
    err,
    rows
  ) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
