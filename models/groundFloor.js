var db = require('../database');
let deleteQuery = 'DELETE FROM groundFloor where id = $1';
var groundFloor = {

    add: (groundFloor, callback) => {
        db.query('insert into groundFloor values($1,$2,$3,$4,$5,$6)',
            [groundFloor.id, groundFloor.properties, groundFloor.uValue, groundFloor.area,
            groundFloor.materials, groundFloor.protected],
            callback
        );
    },
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }

}

module.exports = groundFloor;