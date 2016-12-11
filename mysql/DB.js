'use strict';
const mysql2nativePromise = require('mysql2/promise');
const async = require('asyncawait/async');
const await = require('asyncawait/await');


const cfOption = {
    "host": "localhost",
    "user": "root",
    "database": "titustest"
};

const conn = mysql2nativePromise.createConnection(cfOption);

// var DB = (sql, params) => {
  // if (cfg.site.debug === 1 ) {
  //   DB.flog('info', DB.sql(sql, params));
  // }
//   return db.query(sql, params).spread(rs => rs);
// };


// DB.one = (sql, params) => {
//   return DB(sql, params)
//   .then(rows => {
//     return rows[0];
//   });
// };
//
// DB.insert = (table, params) => DB('INSERT INTO `'+ table +'` SET ?', params);


var DB = async(function(sql, params) {
    return conn.then(function(connection){
        return connection.query(sql, params);
    });
});

DB.one = async(function(sql, params){
    var result = await(DB(sql, params)
        .then(rows => {
            return rows[0];
        }));

    return result;
});

DB.insert = async(function(sql, params){
  var result = await(DB(sql, params).then(id => {
    return id;
  }));

  return id;
});

module.exports = DB;
