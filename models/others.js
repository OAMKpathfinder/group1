var db = require('../database');
//queries defined here to use below models
let deleteQuery = 'DELETE FROM others where id = $1';
let getAllQuery = 'SELECT * FROM others';
let getByIdQuery = 'SELECT * FROM others where id=$1';
var others = {

  //Get request model, all the rows and by id is defined here
  getAll:(callback) => {
    return db.query(getAllQuery, callback);
  },
  
  getById:(id, callback) => {
    return db.query(getByIdQuery, [id], callback);
  },

	add: (others, callback) => {
		db.query('insert into others(properties,hjoht,cost,pipe,cond) values($1,$2,$3,$4,$5)',
			[others.properties, others.hjoht, others.cost, others.pipe, others.cond],
			callback
		);
	},
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	},

  //Update - requires others id
  updateOthers: (id, others, callback) => {
    //TODO validation
    return db.query(
      "update others set hjoht = $1, cost = $2, pipe = $3, cond = $4 where id = $5",
      [others.hjoht, others.cost, others.pipe, others.cond, id],
      callback
    );
  },
};

module.exports = others;