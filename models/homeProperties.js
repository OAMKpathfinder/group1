var db = require('../database');

var homeProperties = {
   //Update - requires homeProperties id
   updateHomeProperties: function(id, homeProperties, callback) {
     //TODO validation
     return db.query(
       "update homeProperties set owner = $1, name = $2  where id = $3",
       [
         homeProperties.owner,
         homeProperties.name,
         id
       ],
       callback
     );
   }
 };
 
 module.exports = homeProperties;
  


