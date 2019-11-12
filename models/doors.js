var db = require('../database');
let deleteQuery = 'DELETE FROM doors where id = $1';


var doors = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = doors;