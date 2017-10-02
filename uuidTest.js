'use strict';

const uuid = require('uuid/v1');

let testu = uuid().toString().replace(/-/g, '');
let testn = uuid().replace(/-/g, '');

console.log(testu);
console.log(testn);
