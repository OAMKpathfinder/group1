var db = require('../database');
let deleteQuery = 'DELETE FROM windowAll where id = $1';


var windowAll = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = windowAll;