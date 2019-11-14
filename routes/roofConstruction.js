var express = require('express');
var router = express.Router();
var roofConstruction = require('../models/roofConstruction');

router.post('/', (req, res) => {
    roofConstruction.add(req.body, (err, count) => {
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
    del.deleteBasic(roofConstruction,req,res)
});

var GET = require('./GET');
var get = new GET();
router.get('/:id?', (req,res,next) => {
  if(req.params.id){
    get.getById(roofConstruction,req,res);
  }
  else{
    get.getAll(roofConstruction,req,res);
  }
});
//Update - requires roofConstruction id
router.put("/:roofConstruction_id", function(req, res, next) {
  roofConstruction.updateRoofConstruction(req.params.roofConstruction_id, req.body,
    function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});
module.exports = router;
