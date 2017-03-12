'use strict';
const _ = require('lodash');


console.log('-- start omit method of lodash -- ');
const c = {
    "name": "titus",
    "title": "RD",
    "company": "deepblu"
}
console.log('before omit c is: ');
console.log(c);

const d =  _.omit(c, "name");
console.log('after omit c is : ');
console.log(c);
console.log('after omit create one new object assigned to d as : ');
console.log(d);
console.log(' ++++++++++++++++++++++++++ \n\n');

console.log('-- Start mapKeys method of lodash --');
const arr = [
    {"id": 1, "name": "titus" , "title": "Team leader", "company": "deepblu"},
    {"id": 2, "name": "titus" , "title": "Tech Yahoo", "company": "Yahoo"},
    {"id": 3, "name": "titus" , "title": "Senior Engineer", "company": "104Tech"}
]

const o1 = _.mapKeys(arr, "id");
console.log('o1 after mapKeys is : ');
console.log(o1);
