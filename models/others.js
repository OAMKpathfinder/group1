var db = require("../database");

var others = {
  //Update - requires others id
  updateOthers: function(id, others, callback) {
    //TODO validation
    return db.query(
      "update others set hjoht = $1, cost = $2, pipe = $3 where id = $4",
      [others.hjoht, others.cost, others.pipe, id],
      callback
    );
  }
};

module.exports = others;
