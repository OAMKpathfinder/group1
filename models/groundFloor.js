var db = require('../database');
var groundFloor = {

    add: (groundFloor, callback) => {
        db.query('insert into groundFloor values($1,$2,$3,$4,$5,$6)',
            [groundFloor.id, groundFloor.properties, groundFloor.uValue, groundFloor.area,
            groundFloor.materials, groundFloor.protected],
            callback
        );
    }

}
module.exports = groundFloor;