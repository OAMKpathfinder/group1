var db = require('../database');
var windowAll = {

    add: (windowAll, callback) => {
        return db.query('insert into windowall values($1,$2)',
            [windowAll.id, windowAll.properties],
            callback
        );
    }

}
module.exports = windowAll;