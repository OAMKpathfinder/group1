var db = require('../database');
var door = {

    add: (door, callback) => {
        return db.query('insert into door values($1,$2,$3,$4,$5,$6,$7,$8)',
            [door.id, door.doors, door.uValue, door.area, door.materials, door.bridgeValue,
            door.name, door.protected],
            callback
        );
    }

}
module.exports = door;