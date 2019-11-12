var express = require('express');
var router = express.Router();
var others = require('../models/others');

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
 