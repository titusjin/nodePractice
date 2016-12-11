'use strict';
const fs = require('fs');
const Promise = require('promise');

var sayHello = function(){
    return new Promise(function(resolve, reject){
        resolve('titus');
    });
}

var sayYes = function(){
    return new Promise(function(resolve, reject){
        console.log('in sayYes promise');
        resolve('titus');
    }).then(function(resolve, reject){
        console.log('in sayYes then...');
        return new Promise(function(resolve, reject){
            resolve('nothing');
        });
    });
}

sayHello().then(
    function(name){
        console.log('hello '+ name);

        return sayYes();
    }
).then(
    function(message){
        console.log('in end success then');
    }
);
