'use strict';
const fs = require('fs');
const Promise = require('promise');

function copyFileCallback(){
    if(err){
        console.error(err);
    }else{
        console.log('file content copy complete.');
        // fs.stat('/etc/titus/name.txt', (err, stat) => {
        //     if(err) throw err;
        //     console.log('stat : ' + JSON.stringify(stat));
        // });
    }    
}

var copyFileStream = fs.createReadStream('./describe.js');
// copyFileStream.on('data', (chunk) => {
//     console.log('receive data chunk  : ' + chunk);
// });

var copyFile = function(name, buffer, callback){
    fs.appendFile(name, buffer, (err) => {
        return true;
    };
};

// 1 check folder: ./titus if exist
// 2 success --> co
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
        copyFile(filename, copyFileStream._readableState.buffer, copyFileCallback);
    },
    function(message){
        console.error(message);
    }
).then(
    function(result){
        console.log(result);

    //     var dPath = '/Users/titus';
    //     fs.readdir(dPath, (err, files) => {
    //         files.forEach( function(f){
    //             var status = fs.stat(f, function(err, stats){
    //                 console.error(err);

    //                 if(stats.isDirectory()){
    //                     cosnole.log('directory : ');
    //                 }else{
    //                     cosole.log('file : ');
    //                 }
    //                 console.log(f);
    //             });
    //         });
    //     });
    // }, function(message){
    //     console.error(message);
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