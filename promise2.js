'use strict';
const fs = require('fs');
const Promise = require('promise');
var await = require('asyncawait/await');

function copyFileCallback(err){
    if(err){
        console.error(err);
    }else{
        // fs.stat('/etc/titus/name.txt', (err, stat) => {
        //     if(err) throw err;
        //     console.log('stat : ' + JSON.stringify(stat));
        // });
        console.log('file content copy complete.');
    }
}

// var copyFileStream = fs.createReadStream('./bufferDemo.js');
// copyFileStream.on('data', (chunk) => {
//     console.log('receive data chunk  : ' + chunk);
// });

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

function test(){
    return p1.then(
        function(filename){
            var copyFileStream = fs.createReadStream('./test.txt');
            copyFileStream.on('data', (chunk) => {
                fs.appendFile(filename, chunk);
            });
            // copyFile(filename, copyFileStream._readableState.buffer);
            return sayHello();
        },
        function(message){
            console.log(message);
        }
    ).then(
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
            return 'finshed';
        }
    );
}


console.log('final result : ' + await(test()));

// fs.mkdir('./titus', (err) => {
//     if(!err || err.code == 'EEXIST'){
//         console.log('start to copyfile');

//         copyFile('./titus/name.txt', copyFileStream._readableState.buffer, copyFileCallback);
//     }else{
//         console.error(err);
//     }
// });