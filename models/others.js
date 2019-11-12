var db = require('../database');
let deleteQuery = 'DELETE FROM others where id = $1';


var others = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = others;