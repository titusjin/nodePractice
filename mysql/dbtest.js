'use strict';

const appRoot = require('app-root-path');
const await = require('asyncawait/await');
const DB = require(appRoot + '/mysql/DB');


DB.one('SELECT user FROM user').then(function(row){
    console.log(row);
});

DB('SELECT user FROM user').then(function(rows){
        console.log(rows[0]);
});
