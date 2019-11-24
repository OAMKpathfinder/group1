require('dotenv').config()
const Pool = require('pg').Pool

const connection = new Pool({
    user: "postgres",
    host:  "localhost",
    database: "pathfinder",
    password: "admin123",
    port: "8000",
});

module.exports = connection;
