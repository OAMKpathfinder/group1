var db = require('../database');
let deleteQuery = 'DELETE FROM homeProperties where id = $1';


var homeProperties = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = homeProperties;