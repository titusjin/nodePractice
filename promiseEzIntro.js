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
        resolve('titus');
    });
}

sayHello().then(
    function(name){
        console.log('hello '+ name);
        var promistinst = sayYes();

        console.log('let me check : ');
        console.log(promistinst);

        return promistinst;
    }
).then(
    function(name){
        console.log('yes  ' + name);
    }
);