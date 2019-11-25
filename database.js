require('dotenv').config()
const Pool = require('pg').Pool

const connection = new Pool({
    user: "postgres",
    host:  "localhost",
    database: "DummyPF",
    password: "wasd",
    port: "5432",
});

module.exports = connection;
