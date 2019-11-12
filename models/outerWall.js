var db = require('../database');
var outerWall = {

    add: (outerWall, callback) => {
        db.query('insert into outerWall values($1,$2,$3,$4,$5,$6)',
            [outerWall.id, outerWall.properties, outerWall.uValue, outerWall.area,
            outerWall.materials, outerWall.protected],
            callback
        );
    }

}
module.exports = outerWall;