'use strict';

var mysql = require('mysql2');
var mysql2nativePromise = require('mysql2/promise');

var db = require('mysql-promise')();

var cfOption = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "mysql"
};

/*
  mysql2 direct usage
 */
var connection = mysql.createConnection({host: 'localhost' , user: 'root', password: 'root', database:'mysql' });
connection.execute('SELECT user FROM USER WHERE `user` = ?', [`root`], function (err, results, fields) {
  console.log(results[0]); // results contains rows returned by server
  // process.exit(0);
});


/*
  mysql2 native-promise usage
 */
mysql2nativePromise.createConnection({host: 'localhost' , user: 'root', password: 'root', database:'mysql' })
    .then(function(conn){
        return conn.execute('SHOW databases');
    })
    .then(function(rows){
        console.log(rows);
        return rows;
    });


/*
 mysql2 native async usage
 */
// async function testNativeAsync() {
//     var conn2 = await mysql2nativePromise.createConnection({host: 'localhost' , user: 'root', password: 'root', database:'mysql' });
//     var result = await conn2.query('show databases');
//     console.log(result);
// }
//
// testNativeAsync();

// console.log(rows);
    // .then((conn) => {
    //     conn.query('SELECT user FROM USER');
    // })
    // .then((rows, fields) => {
    //     console.log(fields);
    //     process.exit(0);
    // });


/*
  mysql-promise npm module usage
 */
db.configure(cfOption);
db.query('SELECT user,password_expired FROM USER WHERE user=? ', 'root')
    .then((rows) => {
        console.log(rows[0]);
    });


// rows.sayhello = () => 'hello !! ';
