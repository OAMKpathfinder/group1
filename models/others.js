var db = require('../database');
var others = {

    add: (others, callback) => {
        db.query('insert into others values($1,$2,$3,$4,$5)',
            [others.id, others.properties, others.hjoht, others.cost, others.pipe],
            callback
        );
    }

}
module.exports = others;