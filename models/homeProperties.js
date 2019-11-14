var db = require('../database');
let deleteQuery = 'DELETE FROM homeProperties where id = $1';
var homeProperties = {

  add: (homeProperties, callback) => {
    db.query('insert into homeProperties values($1,$2)',
      [homeProperties.owner, homeProperties.name],
      callback
    );
  },
  
  delete: (id, callback) => {
    return db.query(deleteQuery, [id], callback);
  },

   //Update - requires homeProperties id
   updateHomeProperties: (id, homeProperties, callback) => {
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
   },
 };

 module.exports = homeProperties;