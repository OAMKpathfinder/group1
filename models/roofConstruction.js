var db = require('../database');
let deleteQuery = 'DELETE FROM roofConstruction where id = $1';
var roofConstruction = {

    add: (roofConstruction, callback) => {
        return db.query('insert into roofconstruction values($1,$2,$3,$4,$5,$6)',
            [roofConstruction.id, roofConstruction.properties, roofConstruction.uValue,
            roofConstruction.area, roofConstruction.materials, roofConstruction.protected],
            callback
        );
    },
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    },

  //Update - requires roofConstruction id
  updateRoofConstruction: (id, roofConstruction, callback) => {
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
  },
};

module.exports = roofConstruction;
