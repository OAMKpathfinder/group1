var db = require('../database');
let deleteQuery = 'DELETE FROM groundFloor where id = $1';


var groundFloor = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = groundFloor;