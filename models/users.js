var db = require('../database');
let deleteQuery = 'DELETE FROM users where id = $1';
var users = {

	add: (users, callback) => {
		db.query('insert into users values($1,$2)',
			[users.email, users.password],
			callback
		);
	},
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	}

}

module.exports = users;