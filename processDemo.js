'use strict';

var getPaltform = function(){
    return process.platform;
}

console.log('this in the module is  : ');
console.log(this);
console.log('\n');

console.log('The module object is : ');
console.log(module);
console.log('\n');

console.log('The exports object is : ');
console.log(exports );
console.log('\n');

console.log('the platform is : ');
console.log(getPaltform());
console.log('\n');

process.on('beforeExit', (exitCode) => {
    console.log('In beforeExit event handler , the exitcode is: ');
    console.log(exitCode);
});

