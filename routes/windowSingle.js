var express = require('express');
var router = express.Router();
var windowSingle = require('../models/windowSingle');
var DELETE = require('./DELETE');
var del = new DELETE();

//Get - requires windowSingle id for single or no param for all
router.get("/:windowSingle_id?", function(req, res, next) {
  if(req.params.windowSingle_id){
    windowSingle.get(req.params.windowSingle_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else if (rows.rowCount == 0 ){
          res.send("No results found")
      }
      else {
        res.json(rows.rows[0]);
      }
    });
  }else{
    windowSingle.getAll(function(err, rows) {
      if (err) {
        res.json(err);
      } else if (rows.rowCount == 0 ){
          res.send("No results found")
      }
      else {
        res.json(rows.rows);
      }
    });
  }
});

router.post('/', (req, res) => {
    windowSingle.add(req.body, (err, count) => {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
});

router.delete('/:id', (req,res,next) => {
    del.deleteBasic(windowSingle,req,res)
});

//Update - requires windowSingle id
router.put("/:windowSingle_id", function(req, res, next) {
   windowSingle.updateWindowSingle(
    req.params.windowSingle_id,
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
