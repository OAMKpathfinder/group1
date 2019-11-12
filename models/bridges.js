var db = require('../database');

let deleteQuery = 'DELETE FROM bridges where id = $1';


var bridges = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = bridges;