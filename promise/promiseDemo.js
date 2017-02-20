'use strict';
const fs = require('fs');
const Promise = require('promise');

//  function copyFileCallback(err){
//      if(err){
//          console.error(err);
//      }else{
//         fs.stat('/etc/titus/name.txt', (err, stat) => {
//             if(err) throw err;
//             console.log('stat : ' + JSON.stringify(stat));
//         });
//          console.log('file content copy complete.');
//      }
//  }

var copyFileStream = fs.createReadStream('../package.json');

function copyFile(){
    return new Promise(function(resolve, reject){
        try{
            copyFileStream.on('data', (chunk) => {
                console.log('receive data chunk  : ' + chunk);

                fs.appendFile('./titus/append.txt', chunk, function(error){
                    if(error){
                        reject(error);
                    }else{
                        resolve('success');
                    }
                });
            });
        }catch(e){
            reject(e);
        }
    })
}

function makeFileDir(){
    return new Promise(function(resolve, reject){
        fs.mkdir('./titus', (err) => {
            if(!err || err.code == 'EEXIST'){
                resolve('makeFileDir success');
            }else{
                reject('PLEASE TRY AGAIN');
            }
        });
    });
}

makeFileDir().then(
    function(message){
        console.log(message);
        // return message;
    },
    function(messaeg){
        console.log('reject : ' + message);
    }
).then(
    function(message){
        console.log('no need to pass proise in to second round...');
    }
    // function(message){
    //     console.log('hello');
    //     console.log(message);
    // },
    // function(message){
    //     console.log(message);
    // }
);
