var db = require('../database');
let deleteQuery = 'DELETE FROM windowAll where id = $1';
var windowAll = {

	add: (windowAll, callback) => {
		return db.query('insert into windowall(properties) values($1)',
			[windowAll.properties],
			callback
		);
	},
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	}
}

module.exports = windowAll;