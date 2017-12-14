/**
 * Practice of ES6 class declaration
 *
 * @author titus
 * @since 2016.12
 */



'use strict';

/**
 * [standard construcotr]
 * @return {[type]} [description]
 */
let c = function(){
    this.name = 'titus';
    this.age = 38;
    this.company = 'deepblu.com';

    console.log('This keyword while calling function as constructor: ');
    console.log(this);
    console.log(typeof this);
}

let cInstance = new c();

console.log('Instace while console.log is : ');
console.log(cInstance);


console.log(cInstance instanceof c);
