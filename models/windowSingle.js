var db = require("../database");
let deleteQuery = "DELETE FROM windowSingle where id = $1";
var windowSingle = {
  
  get: (windowSingle_id, callback) => {
    return db.query(
      "select * from windowSingle where id = $1",
      [windowSingle_id],
      callback
    );
  },

  getAll: callback => {
    return db.query("select * from windowSingle", callback);
  },

	add: (windowSingle, callback) => {
		return db.query('insert into windowSingle(windowAll,uValue,area, \
            materials,bridgeValue,name,protected) values($1,$2,$3,$4,$5,$6,$7)',
			[windowSingle.windowAll, windowSingle.uValue, windowSingle.area,
			windowSingle.materials, windowSingle.bridgeValue, windowSingle.name, windowSingle.protected],
			callback
		);
	},
	delete: (id, callback) => {
		return db.query(deleteQuery, [id], callback);
	},
  //Update - requires windowSingle id
  updateWindowSingle: function(id, windowSingle, callback) {
    //TODO validation
    return db.query(
      "update windowSingle set uValue = $1, area = $2, materials = $3, bridgeValue = $4, \
      name = $5, protected = $6 where id = $7",
      [
        windowSingle.uValue,
        windowSingle.area,
        windowSingle.materials,
        windowSingle.bridgeValue,
        windowSingle.name,
        windowSingle.protected,
        id
      ],
      callback
    );
  }
};

module.exports = windowSingle;