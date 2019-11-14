var db = require('../database');
//queries defined here to use below models
let deleteQuery = 'DELETE FROM bridges where id = $1';
let getAllQuery = 'SELECT * FROM bridges';
let getByIdQuery = 'SELECT * FROM bridges where id=$1';
var bridges = {
  
    //Get request model, all the rows and by id is defined here
    getAll:(callback) => {
      return db.query(getAllQuery, callback);
    },
    getById:(id, callback) => {
      return db.query(getByIdQuery, [id], callback);
    },

	add: (bridges, callback) => {
		return db.query('insert into bridges(properties, outerWallToOuterWall, \
            outerWallToRoof, outerWallToMiddleBasement, outerWallToGroundFloor, \
            protected) values($1,$2,$3,$4,$5,$6)',
			[
        bridges.properties,
        bridges.outerWallToOuterWall,
        bridges.outerWallToRoof,
        bridges.outerWallToMiddleBasement, 
        bridges.outerWallToGroundFloor, 
        bridges.protected
      ],
			callback
		);
	},
  
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	},

  updateBridge: (id, bridges, callback) => {
    //TODO validation
      return db.query(
        "update bridges set outerWallToOuterWall = $1, outerWallToRoof = $2, \
        outerWallToMiddleBasement = $3, outerWallToGroundFloor = $4, protected = $5 where id = $6",
        [
          bridges.outerWallToOuterWall,
          bridges.outerWallToRoof,
          bridges.outerWallToMiddleBasement,
          bridges.outerWallToGroundFloor,
          bridges.protected,
          id
        ],
        callback
      );
    },
};

module.exports = bridges;
