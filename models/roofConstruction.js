var db = require("../database");

var roofConstruction = {
  //Update - requires roofConstruction id
  updateRoofConstruction: function(id, roofConstruction, callback) {
    //TODO validation
    return db.query(
      "update outerWall set uValue = $1, area = $2, materials = $3, \
        protected = $4 where id = $5",
      [
        roofConstruction.uValue,
        roofConstruction.area,
        roofConstruction.materials,
        roofConstruction.protected,
        id
      ],
      callback
    );
  }
};

module.exports = roofConstruction;
