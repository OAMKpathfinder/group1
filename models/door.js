var db = require('../database');
let deleteQuery = 'DELETE FROM door where id = $1';
var door = {

  add: (door, callback) => {
    return db.query('insert into door(doors,uValue,area,materials,bridgeValue, \
      name,protected) values($1,$2,$3,$4,$5,$6,$7)',
      [door.doors, door.uValue, door.area, door.materials, door.bridgeValue,
      door.name, door.protected],
      callback
    );
  },
    
  delete: (id, callback) => {
    return db.query(deleteQuery, [id], callback);
  },
    
  //Update - requires door id
  updateDoor: (id, door, callback) => {
    //TODO validation
    return db.query(
      "update door set uValue = $1, area = $2, materials = $3, bridgeValue = $4, \
      name = $5, protected = $6 where id = $7",
      [
        door.uValue,
        door.area,
        door.materials,
        door.bridgeValue,
        door.name,
        door.protected,
        id
      ],
      callback
    );
  },
};

module.exports = door;
