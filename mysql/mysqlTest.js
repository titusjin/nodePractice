'use strict';

var appRoot = require('app-root-path');
var db      = require('mysql-promise')();

var cfOption = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "mysql"
};

db.configure(cfOption);

db.query('SELECT user,password_expired FROM USER').spread((users) => {
    console.log('hello ' + users);

    process.exit(0);
});
