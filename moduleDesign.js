'use strict';

var sendMessage = (function(){
    var result = {};

    result.sayhello = function(name){
        console.log('Hello ' + name);
    }

    result.sendMessage = function(message){
        console.log(message);
    }
    return result;
})();

module.exports= sendMessage;
