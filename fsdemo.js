'use strict';
const fs = require('fs');
const Promise = require('promise');

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

var copyFileStream = fs.createReadStream('./describe.js');
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

p1.then(
    function(filename){
        copyFile(filename, copyFileStream._readableState.buffer);
    },
    function(message){
        console.log(message);
    }
);

// fs.mkdir('./titus', (err) => {
//     if(!err || err.code == 'EEXIST'){
//         console.log('start to copyfile');

//         copyFile('./titus/name.txt', copyFileStream._readableState.buffer, copyFileCallback);
//     }else{
//         console.error(err);
//     }
// });