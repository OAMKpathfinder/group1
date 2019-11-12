var db = require('../database');
let deleteQuery = 'DELETE FROM doors where id = $1';
var doors = {

    add: (doors, callback) => {
        return db.query('insert into doors values($1,$2)',
            [doors.id, doors.properties],
            callback
        );
    },
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }

}

module.exports = doors;