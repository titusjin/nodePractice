'use strict';
const appRoot = require('app-root-path');
const await = require('asyncawait/await');
const DB = require(appRoot + '/mysql/DB');

var result;
DB.one('SELECT user FROM user').then(function(row){
    console.log(result);
});
