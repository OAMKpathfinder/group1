var db = require('../database');
let deleteQuery = 'DELETE FROM groundFloor where id = $1';
var groundFloor = {

  add: (groundFloor, callback) => {
    db.query('insert into groundFloor(properties,uValue,area,materials, \
            protected) values($1,$2,$3,$4,$5)',
      [groundFloor.properties, groundFloor.uValue, groundFloor.area,
      groundFloor.materials, groundFloor.protected],
      callback
    );
  },
  delete: (id, callback) => {
    return db.query(deleteQuery, [id], callback);
  }

}

module.exports = groundFloor;