var db = require('../database');
let deleteQuery = 'DELETE FROM bridges where id = $1';
var bridges = {

	add: (bridges, callback) => {
		return db.query('insert into bridges(properties,outerWallToOuterWall, \
            outerWallToRoof,outerWallToMiddleBasement,outerWallToGroundFloor,protected) values($1,$2,$3,$4,$5,$6)',
			[bridges.properties, bridges.outerWallToOuterWall, bridges.outerWallToRoof,
			bridges.outerWallToMiddleBasement, bridges.outerWallToGroundFloor, bridges.protected],
			callback
		);
	},
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	}

}

module.exports = bridges;