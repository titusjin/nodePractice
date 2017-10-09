let _ = require('lodash');
let map = require('lodash/fp/map');

let spacePattern = /\s+/g;
let matchT = function( pattern, str ){
    if(str){
        return function(){
            return str.match(pattern);
        }
    }else{
        return function(str){
            return str.match(pattern);
        }
    }
}

let curry_spacePattern = matchT(spacePattern);
// we can do more differnt pattern as a function and pass differnt words into that function to test if matching different pattern or not.

console.log(curry_spacePattern('hello world'));
console.log(curry_spacePattern('NO_SPACE'));


let matchTT = function( pattern, word ){
    return word.match(pattern);
}
let matchByCurry =  _.curry(matchTT);
console.log(matchByCurry('hello_world')(/\s+/g));


// let curry_mapWithSpacePattern = _.map(curry_spacePattern);
// console.log(curry_mapWithSpacePattern(['hello world', 'NO_SPACE']));
