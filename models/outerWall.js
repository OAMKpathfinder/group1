var db = require('../database');
let deleteQuery = 'DELETE FROM outerWall where id = $1';


var outerWall = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = outerWall;