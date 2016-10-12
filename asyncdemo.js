'use strict';

const Promise = require('promise');
const await = require('asyncawait/await');
const async = require('asyncawait/async');
const fs = require('fs');

function mkdir(folderName){
    var p = new Promise(function(resolve, reject){
            fs.mkdir(folderName, (error) => {
                if(!error || error.code == 'EEXIST'){
                    console.log('./titus folder done.');
                    resolve(true);
                }else{
                    console.error('Wrong: ' + error);
                    reject(false);
                }
            })
        }
    );

    return p.then(function(result){
        return result;
    });
};

function copyFile(sorceName, destName){
    fs.stat(destName, (err, stat) => {
        if(stat){
            fs.unlink(destName);
        }
    });

    var readStream = fs.createReadStream(sorceName);
    readStream.on('data', (chunk) => {
        fs.appendFile(destName, chunk);
    });
}

var foo = async(function(){
    var result = await(mkdir('./titus'));

    if(result){
        await(copyFile('test.txt' , './titus/name.txt'));
    }

    return result;
});

foo();
