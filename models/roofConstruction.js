var db = require('../database');
let deleteQuery = 'DELETE FROM roofConstruction where id = $1';


var roofConstruction = {
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }
};

module.exports = roofConstruction;