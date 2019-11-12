var db = require('../database');
let deleteQuery = 'DELETE FROM users where id = $1';


var users = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = users;