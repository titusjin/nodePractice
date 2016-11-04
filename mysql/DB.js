'use strict';
const mysql2nativePromise = require('mysql2/promise');
const async = require('asyncawait/async');
const await = require('asyncawait/await');


const cfOption = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "mysql"
};

const conn = mysql2nativePromise.createConnection(cfOption);

var DB = async(function(sql, params) {
    return conn.then(function(connection){
        return connection.execute(sql, params);
    });
});

DB.one = async(function(sql, params){
    var result = await(DB(sql, params)
        .then(rows => {
            return rows[0];
        }));

    return result;
});

module.exports = DB;
