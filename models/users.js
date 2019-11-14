var db = require('../database');
//queries defined here to use below models
let deleteQuery = 'DELETE FROM users where id = $1';
let getAllQuery = 'SELECT * FROM users';
let getByIdQuery = 'SELECT * FROM users where id=$1';
var users = {

  //Get request model, all the rows and by id is defined here
  getAll:(callback) => {
    return db.query(getAllQuery, callback);
  },
  getById:(id, callback) => {
    return db.query(getByIdQuery, [id], callback);
  },

	add: (users, callback) => {
		db.query('insert into users(email, password) values($1,$2)',
			[users.email, users.password],
			callback
		);
	},
    
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	},

  updateUser: (id, users, callback) => {
    //TODO email and password validation
    return db.query(
      "update users set email = $1, password = $2 where id = $3",
      [users.email, users.password, id],
      callback
    );
  },
};

module.exports = users;