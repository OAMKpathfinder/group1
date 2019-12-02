var db = require("../database");
//queries defined here to use below models
let deleteQuery = 'DELETE FROM defaults where id = $1';
let getAllQuery = 'SELECT * FROM defaults';
let getByIdQuery = 'SELECT * FROM defaults where id = $1';

var defaults = {
  getAll:(callback) => {
    return db.query(getAllQuery, callback);
  },
  getById:(defaults_id,callback) => {
    return db.query('select * from defaults where id = $1', [defaults_id], callback);
  },
  add:(defaults, callback) => {
    return db.query('insert into defaults(part,materials,country,era,values)\
    values($1,$2,$3,$4,$5)',
    [defaults.part, defaults.materials, defaults.country, defaults.era, defaults.values],
    callback)
  },

  delete: (id, callback) => {
    return db.query(deleteQuery, [id], callback);
  },

  updateDefaults: (id, defaults, callback) => {
    return db.query('update defaults set part = $1, materials = $2, country = $3, era = $4, values = $5 where id = $6',
      [
        defaults.part,
        defaults.materials,
        defaults.country,
        defaults.era,
        defaults.values,
        id
      ],
      callback
    );
  }

};

module.exports = defaults;