'use strict';

const Promise = require('promise');

// var make = function(){
//     var result = {name : 'fjdklfjasl'};
//
//     result.hello = () => {
//         console.log(this);
//         console.log(this.name);
//     }
//
//     return result;
// };
//
// var ins = make();
// ins.hello();

// var test1 = {greet: 'happy'};
// var message = function(){
//     console.log(this.greet);
// };
// test1.sayMessage = message;
//
// console.log(test1.greet);
//
// test1.sayMessage();


var sendMessage = (function(){
    var result = {
        name: 'deeeeeeee',
        sayhello(){
            return new Promise(function(resolve, reject){
                console.log('I am in sayHello promise');
                resolve('good Timothey');
            });
        },
        sendMessage: (message) =>{
            return new Promise(function(resolve, reject){
                console.log('I am in sendMessage promise');
                resolve(message);
            });
        }
    };

    return result;
})();

module.exports= sendMessage;
