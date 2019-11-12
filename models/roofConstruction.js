var db = require('../database');
var roofConstruction = {

    add: (roofConstruction, callback) => {
        return db.query('insert into roofconstruction values($1,$2,$3,$4,$5,$6)',
            [roofConstruction.id, roofConstruction.properties, roofConstruction.uValue,
            roofConstruction.area, roofConstruction.materials, roofConstruction.protected],
            callback
        );
    }

}
module.exports = roofConstruction;