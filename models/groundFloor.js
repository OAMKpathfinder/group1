var db = require('../database');
//queries defined here to use below models
let deleteQuery = 'DELETE FROM groundFloor where id = $1';
let getAllQuery = 'SELECT * FROM groundFloor'
let getByIdQuery = 'SELECT * FROM groundFloor where id=$1'
var groundFloor = {
  
  //Get request model, all the rows and by id is defined here
  getAll:(callback) => {
    return db.query(getAllQuery, callback);
  },
  
  getById:(id, callback) => {
    return db.query(getByIdQuery, [id], callback);
  },

  add: (groundFloor, callback) => {
    db.query('insert into groundFloor(properties,uValue,area,materials, \
            protected,cond) values($1,$2,$3,$4,$5,$6)',
      [groundFloor.properties, groundFloor.uValue, groundFloor.area,
      groundFloor.materials, groundFloor.protected,groundFloor.cond],
      callback
    );
  },
  
  delete: (id, callback) => {
    return db.query(deleteQuery, [id], callback);
  },

   //Update - requires groundFloor id
   updateGroundFloor: (id, groundFloor, callback) => {
     //TODO validation
     return db.query(
       "update groundFloor set uValue = $1, area = $2, materials = $3, \
        protected = $4, cond = $5 where id = $6",
       [
         groundFloor.uValue,
         groundFloor.area,
         groundFloor.materials,
         groundFloor.protected,
         groundFloor.cond,
         id
       ],
       callback
     );
   },
 };

 module.exports = groundFloor;