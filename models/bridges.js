var db = require("../database");

var bridges = {
  updateBridge: function(id, bridges, callback) {
    //TODO validation
    return db.query(
      "update bridges set outerWallToOuterWall = $1, outerWallToRoof = $2, \
       outerWallToMiddleBasement = $3, outerWallToGroundFloor = $4, protected = $5 where id = $6",
      [
        bridges.outerWallToOuterWall,
        bridges.outerWallToRoof,
        bridges.outerWallToMiddleBasement,
        bridges.outerWallToGroundFloor,
        bridges.protected,
        id
      ],
      callback
    );
  }
};

module.exports = bridges;

