var db = require('../database');
let deleteQuery = 'DELETE FROM outerWall where id = $1';
var outerWall = {

	add: (outerWall, callback) => {
		db.query('insert into outerWall(properties,uValue,area, \
            materials,protected) values($1,$2,$3,$4,$5)',
			[outerWall.properties, outerWall.uValue, outerWall.area,
			outerWall.materials, outerWall.protected],
			callback
		);
	},
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	}

}

module.exports = outerWall;