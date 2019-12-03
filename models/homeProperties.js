var db = require('../database');
//queries defined here to use below models
let deleteQuery = 'DELETE FROM homeProperties where id = $1';
let getAllQuery = 'SELECT * FROM homeProperties';
let getByIdQuery = 'SELECT * FROM homeProperties where id=$1';
let getIdByNameQuery = 'SELECT id from homeProperties where name = $1';
var homeProperties = {

  //Get request model, all the rows and by id is defined here
  getAll:(callback) => {
    return db.query(getAllQuery, callback);
  },
  getById:(id, callback) => {
    return db.query(getByIdQuery, [id], callback);
  },
  getIdByName: (name, callback) => {
    return db.query(getIdByNameQuery, [name], callback);
  },
  add: (homeProperties, callback) => {
    db.query('insert into homeProperties(owner,name,country) values($1,$2,$3)',
      [homeProperties.owner, homeProperties.name, homeProperties.country],
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
       "update homeProperties set owner = $1, name = $2, country = $3 where id = $4",
       [
         homeProperties.owner,
         homeProperties.name,
         homeProperties.country,
         id
       ],
       callback
     );
   },
 };

 module.exports = homeProperties;