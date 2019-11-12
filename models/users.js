var db = require('../database');
var users = {

    add: (users, callback) => {
        db.query('insert into users values($1,$2,$3)',
            [users.id, users.email, users.password],
            callback
        );
    }

}
module.exports = users;