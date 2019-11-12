var db = require('../database');
var bridges = {

    add: (bridges, callback) => {
        return db.query('insert into bridges values($1,$2,$3,$4,$5,$6,$7)',
            [bridges.id, bridges.properties, bridges.outerWallToOuterWall, bridges.outerWallToRoof,
            bridges.outerWallToMiddleBasement, bridges.outerWallToGroundFloor, bridges.protected],
            callback
        );
    }

}
module.exports = bridges;