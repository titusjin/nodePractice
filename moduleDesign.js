'use strict';

const Promise = require('promise');

var sendMessage = (function(){
    var result = {};

    result.sayhello = () => {
        return new Promise(function(resolve, reject){
            console.log('I am in sayHello promise');
            resolve('good Timothey');
        });
    }

    result.sendMessage = (message) => {
        return new Promise(function(resolve, reject){
            console.log('I am in sendMessage promise');
            resolve(message);
        });
    }
    return result;
})();

module.exports= sendMessage;
