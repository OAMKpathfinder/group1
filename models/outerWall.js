var db = require('../database');
let deleteQuery = 'DELETE FROM outerWall where id = $1';
var outerWall = {

    add: (outerWall, callback) => {
        db.query('insert into outerWall values($1,$2,$3,$4,$5,$6)',
            [outerWall.id, outerWall.properties, outerWall.uValue, outerWall.area,
            outerWall.materials, outerWall.protected],
            callback
        );
    },
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    }

}

module.exports = outerWall;