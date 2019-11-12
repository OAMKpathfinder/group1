var db = require("../database");

var door = {
  //Update - requires door id
  updateDoor: function(id, door, callback) {
    //TODO validation
    return db.query(
      "update door set uValue = $1, area = $2, materials = $3, bridgeValue = $4, \
      name = $5, protected = $6 where id = $7",
      [
        door.uValue,
        door.area,
        door.materials,
        door.bridgeValue,
        door.name,
        door.protected,
        id
      ],
      callback
    );
  }
};

module.exports = door;
