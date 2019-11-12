var db = require("../database");

var windowSingle = {
  //Update - requires windowSingle id
  updateWindowSingle: function(id, windowSingle, callback) {
    //TODO validation
    return db.query(
      "update windowSingle set uValue = $1, area = $2, materials = $3, bridgeValue = $4, \
      name = $5, protected = $6 where id = $7",
      [
        windowSingle.uValue,
        windowSingle.area,
        windowSingle.materials,
        windowSingle.bridgeValue,
        windowSingle.name,
        windowSingle.protected,
        id
      ],
      callback
    );
  }
};

module.exports = windowSingle;
