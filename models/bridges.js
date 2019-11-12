var db = require('../database');
let deleteQuery = 'DELETE FROM bridges where id = $1';
var bridges = {

    add: (bridges, callback) => {
        return db.query('insert into bridges values($1,$2,$3,$4,$5,$6,$7)',
            [bridges.id, bridges.properties, bridges.outerWallToOuterWall, bridges.outerWallToRoof,
            bridges.outerWallToMiddleBasement, bridges.outerWallToGroundFloor, bridges.protected],
            callback
        );
    },

    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    },

    updateBridge: (id, bridges, callback) => {
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
    },
};
module.exports = bridges;
