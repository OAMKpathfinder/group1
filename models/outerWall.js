var db = require("../database");

var outerWall = {
  //Update - requires outerWall id
  updateOuterWall: function(id, outerWall, callback) {
    //TODO validation
    return db.query(
      "update outerWall set uValue = $1, area = $2, materials = $3, \
        protected = $4 where id = $5",
      [
        outerWall.uValue,
        outerWall.area,
        outerWall.materials,
        outerWall.protected,
        id
      ],
      callback
    );
  }
};

module.exports = outerWall;
