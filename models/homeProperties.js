var db = require('../database');
var homeProperties = {

    add: (homeProperties, callback) => {
        db.query('insert into homeProperties values($1,$2,$3)',
            [homeProperties.id, homeProperties.owner, homeProperties.name],
            callback
        );
    }

}

module.exports = homeProperties;