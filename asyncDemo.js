'use strict';

const await = require('asyncawait/await');
const async = require('asyncawait/async');
const fs = require('fs');


(async( function(){

    var result = false;
    await(
        fs.mkdir('./titus', (error) => {
            if(!error || error.code == 'EEXIST'){
                console.log('./titus folder done.');
            }
            else{
                console.log('Wrong: ' + error);
            }
        })
    );

    await(copyFile('test.txt' , './titus/name.txt'));

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

})
)();
