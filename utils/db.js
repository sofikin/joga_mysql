const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'sofiakalpin',
    password: 'qwerty',
    database: 'joga_mysql'
});

module.exports = db;