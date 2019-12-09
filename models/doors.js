var db = require("../database");
let deleteQuery = "DELETE FROM doors where id = $1";
var doors = {
  get: (doors_id, callback) => {
    return db.query("select * from doors where id = $1", [doors_id], callback);
  },
  getAll: callback => {
    return db.query("select * from doors", callback);
  },
  getAllSingles: (doors_id, callback) => {
    return db.query(
      "SELECT door.* FROM doors FULL OUTER JOIN door ON \
          doors.id = door.doors WHERE doors.id = $1;",
      [doors_id],
      callback
    );
  },
	add: (doors, callback) => {
		return db.query('insert into doors(properties) values($1)',
			[doors.properties],
			callback
		);
	},
  delete: (id, callback) => {
    return db.query(deleteQuery, [id], callback);
  }
};

module.exports = doors;
