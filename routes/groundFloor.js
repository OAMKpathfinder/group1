var express = require("express");
var router = express.Router();
var groundFloor = require('../models/groundFloor');

router.post('/', (req, res) => {
  groundFloor.add(req.body, (err, count) => {
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
    del.deleteBasic(groundFloor,req,res)
});

var GET = require('./GET');
var get = new GET();
router.get('/:id?', (req,res,next) => {
  if(req.params.id){
    get.getById(groundFloor,req,res);
  }
  else{
    get.getAll(groundFloor,req,res);
  }
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
