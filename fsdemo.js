var fs = require('fs');

function copyFileCallback(err){
    if(err){
        console.error(err);
    }else{
        console.log('file content copy complete.');
    }    
}

var copyFileStream = fs.createReadStream('./describe.js');

var copyFile = function(name, stream , callback){
    fs.appendFile(name, stream, callback);
}

fs.mkdir('./titus', (err) => {
    if(!err || err.code == 'EEXIST'){
        copyFile('./titus/name.txt', copyFileStream._readableState.buffer, copyFileCallback);
    }else{
        console.error(err);
    }
});