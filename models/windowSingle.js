var db = require('../database');
var windowSingle = {

    add: (windowSingle, callback) => {
        return db.query('insert into windowSingle values($1,$2,$3,$4,$5,$6,$7,$8)',
            [windowSingle.id, windowSingle.windowAll, windowSingle.uValue, windowSingle.area,
            windowSingle.materials, windowSingle.bridgeValue, windowSingle.name, windowSingle.protected],
            callback
        );
    }

}
module.exports = windowSingle;