'use strict';
const fs = require('fs');
const Promise = require('promise');

const await = require('asyncawait/await');
const async = require('asyncawait/async');

var copyFile = function(name, buffer){
    fs.appendFile(name, buffer);
}

var p1 = new Promise(function(resolve, reject){

    fs.mkdir('./titus', (err) => {
        if(!err || err.code == 'EEXIST'){
            console.log('start to copyfile');

            resolve('./titus/name.txt');

        }else{
            console.error(err);
            reject('PLEASE TRY AGAIN');
        }
    });
});

var sayHello = function(){
    return new Promise(function(resolve, reject){
        resolve('titus');
    });
}

var sayYes = function(){
    return new Promise(function(resolve, reject){
        resolve('titus');
    });
}

// async calling promise
var doIt = async(function(){
    await(sayHello());
});

doIt();

