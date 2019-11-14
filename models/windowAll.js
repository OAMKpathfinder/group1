var db = require("../database");
let deleteQuery = "DELETE FROM windowAll where id = $1";
var windowAll = {
  
  get: (windowAll_id, callback) => {
    return db.query(
      "select * from windowAll where id = $1",
      [windowAll_id],
      callback
    );
  },

  getAll: callback => {
    return db.query("select * from windowAll", callback);
  },

  getAllSingles: (windowAll_id, callback) => {
    return db.query(
      "SELECT windowSingle.* FROM windowAll FULL OUTER JOIN windowSingle ON \
      windowAll.id = windowSingle.windowAll WHERE windowAll.id = $1;",
      [windowAll_id],
      callback
    );
  },

  add: (windowAll, callback) => {
    return db.query(
      "insert into windowall values($1,$2)",
      [windowAll.id, windowAll.properties],
      callback
    );
  },

  delete: (id, callback) => {
    return db.query(deleteQuery, [id], callback);
  }
};

module.exports = windowAll;
