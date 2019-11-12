var db = require("../database");

var users = {
  updateUser: function(id, users, callback) {
    //TODO email and password validation
    return db.query(
      "update users set email = $1, password = $2 where id = $3",
      [users.email, users.password, id],
      callback
    );
  }
};

module.exports = users;
