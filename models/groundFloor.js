var db = require('../database');
let deleteQuery = 'DELETE FROM groundFloor where id = $1';
var groundFloor = {

    add: (groundFloor, callback) => {
        db.query('insert into groundFloor values($1,$2,$3,$4,$5,$6)',
            [groundFloor.id, groundFloor.properties, groundFloor.uValue, groundFloor.area,
            groundFloor.materials, groundFloor.protected],
            callback
        );
    },
    delete: (id, callback) => {
        return db.query(deleteQuery, [id] ,callback);
    },

   //Update - requires groundFloor id
   updateGroundFloor: (id, groundFloor, callback) => {
     //TODO validation
     return db.query(
       "update groundFloor set uValue = $1, area = $2, materials = $3, \
        protected = $4 where id = $5",
       [
         groundFloor.uValue,
         groundFloor.area,
         groundFloor.materials,
         groundFloor.protected,
         id
       ],
       callback
     );
   },
 };

 module.exports = groundFloor;
