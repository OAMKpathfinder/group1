var db = require('../database');
let deleteQuery = 'DELETE FROM door where id = $1';


var door = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = door;