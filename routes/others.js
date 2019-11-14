var express = require('express');
var router = express.Router();
var others = require('../models/others');

router.post('/', (req, res) => {
  others.add(req.body, (err, count) => {
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
    del.deleteBasic(others,req,res)
});

var GET = require('./GET');
var get = new GET();
router.get('/:id?', (req,res,next) => {
  if(req.params.id){
    get.getById(others,req,res);
  }
  else{
    get.getAll(others,req,res);
  }
});

//Update - requires others id
router.put("/:others_id", function(req, res, next) {
   others.updateOthers(
     req.params.others_id,
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
