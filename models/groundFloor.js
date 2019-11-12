var db = require('../database');

var groundFloor = {
   //Update - requires groundFloor id
   updateGroundFloor: function(id, groundFloor, callback) {
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
   }
 };
 
 module.exports = groundFloor;
  

 