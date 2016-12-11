'use strict';

const appRoot = require('app-root-path');
const await = require('asyncawait/await');
const DB = require(appRoot + '/mysql/DB');


DB.one('SELECT * FROM classmates').then(function(row){
    console.log(row);
});

DB.insert('INSERT INTO `classmates` SET ?',{student_id : 101, student_lastName: 'deepblutitus', startdate: '2016-11-14 22:34:48 pm +08:00'}
);
