var db = require('../database');
//queries defined here to use below models
let deleteQuery = 'DELETE FROM roofConstruction where id = $1';
let getAllQuery = 'SELECT * FROM roofConstruction';
let getByIdQuery = 'SELECT * FROM roofConstruction where id=$1';

var roofConstruction = {
  //Get request model, all the rows and by id is defined here
  getAll:(callback) => {
    return db.query(getAllQuery, callback);
  },
  getById:(id, callback) => {
    return db.query(getByIdQuery, [id], callback);
  },
  add: (roofConstruction, callback) => {
      return db.query('insert into roofconstruction values($1,$2,$3,$4,$5,$6)',
          [roofConstruction.id, roofConstruction.properties, roofConstruction.uValue,
          roofConstruction.area, roofConstruction.materials, roofConstruction.protected],
          callback
      );
  },
  //DELETE request model, by id
  delete: (id, callback) => {
      return db.query(deleteQuery, [id] ,callback);
  },
  //Update - requires roofConstruction id
  updateRoofConstruction: (id, roofConstruction, callback) => {
    //TODO validation
    return db.query(
      "update outerWall set uValue = $1, area = $2, materials = $3, \
        protected = $4 where id = $5",
      [
        roofConstruction.uValue,
        roofConstruction.area,
        roofConstruction.materials,
        roofConstruction.protected,
        id
      ],
      callback
    );
  },
};

module.exports = roofConstruction;
