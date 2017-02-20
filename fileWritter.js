const fs = require('fs');

const testJ = [
    {"name": 'titus', "comp": "deepblu"},
    {"name": 'wwww', "comp": "WWWF"}
]

fs.writeFile('titus.txt', testJ.toString(), (err) => {
    console.log('finish');
});
