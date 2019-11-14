var db = require('../database');
let deleteQuery = 'DELETE FROM others where id = $1';
var others = {


	add: (others, callback) => {
		db.query('insert into others(properties,hjoht,cost,pipe) values($1,$2,$3,$4)',
			[others.properties, others.hjoht, others.cost, others.pipe],
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
      "update others set hjoht = $1, cost = $2, pipe = $3 where id = $4",
      [others.hjoht, others.cost, others.pipe, id],
      callback
    );
  },
};

module.exports = others;