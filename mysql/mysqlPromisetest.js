'use strict';

const db = require('mysql-promise')();
const await = require('asyncawait/await');
const cfOption = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "mysql"
};

db.configure(cfOption);
var DB = (sql, params) => db.query(sql, params).spread(rs => rs);
var rows = DB('SELECT user FROM user');

console.log(rows);
