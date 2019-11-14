var db = require('../database');
let deleteQuery = 'DELETE FROM roofConstruction where id = $1';
var roofConstruction = {

	add: (roofConstruction, callback) => {
		return db.query('insert into roofconstruction(properties,uValue,area, \
            materials,protected) values($1,$2,$3,$4,$5,$6)',
			[roofConstruction.properties, roofConstruction.uValue,
			roofConstruction.area, roofConstruction.materials, roofConstruction.protected],
			callback
		);
	},
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	}

}

module.exports = roofConstruction;