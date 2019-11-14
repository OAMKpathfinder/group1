var express = require("express");
var router = express.Router();
var users = require('../models/users');

router.post('/', (req, res) => {
  users.add(req.body, (err, count) => {
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
    del.deleteBasic(users,req,res)
});

var GET = require('./GET');
var get = new GET();
router.get('/:id?', (req,res,next) => {
  if(req.params.id){
    get.getById(users,req,res);
  }
  else{
    get.getAll(users,req,res);
  }
});

router.put("/:user_id", function(req, res, next) {
  users.updateUser(req.params.user_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
