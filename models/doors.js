var db = require('../database');
var doors = {

    add: (doors, callback) => {
        return db.query('insert into doors values($1,$2)',
            [doors.id, doors.properties],
            callback
        );
    }

}
module.exports = doors;