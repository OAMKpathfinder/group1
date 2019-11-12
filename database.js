const Pool = require('pg').Pool

const connection = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'dummy_db',
    password: 'admin123',
    port: 8000,
})

module.exports = connection;