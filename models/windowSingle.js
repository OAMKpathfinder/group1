var db = require('../database');
let deleteQuery = 'DELETE FROM windowSingle where id = $1';


var windowSingle = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = windowSingle;