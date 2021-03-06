var db = require('../database');
//queries defined here to use below models
let deleteQuery = 'DELETE FROM outerWall where id = $1';
let getAllQuery = 'SELECT * FROM outerWall';
let getByIdQuery = 'SELECT * FROM outerWall where id=$1';

var outerWall = {
  //Get request model, all the rows and by id is defined here
  getAll:(callback) => {
    return db.query(getAllQuery, callback);
  },
  getById:(id, callback) => {
    return db.query(getByIdQuery, [id], callback);
  },

	add: (outerWall, callback) => {
		db.query('insert into outerWall(properties,uValue,area, \
            materials,protected,cond) values($1,$2,$3,$4,$5,$6)',
			[outerWall.properties, outerWall.uValue, outerWall.area,
			outerWall.materials, outerWall.protected, outerWall.cond],
			callback
		);
	},
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	},
  
  //Update - requires outerWall id
  updateOuterWall: (id, outerWall, callback) => {
    //TODO validation
    return db.query(
      "update outerWall set uValue = $1, area = $2, materials = $3, \
        protected = $4, cond = $5 where id = $6",
      [
        outerWall.uValue,
        outerWall.area,
        outerWall.materials,
        outerWall.protected,
        outerWall.cond,
        id
      ],
      callback
    );
  }
};

module.exports = outerWall;