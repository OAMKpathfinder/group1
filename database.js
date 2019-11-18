require('dotenv').config()
const Pool = require('pg').Pool

const connection = new Pool({
    user: "postgres",
    host: "localhost",
    database: "pf_db",
    password: "admin123",
    port: "5432",
});

module.exports = connection;