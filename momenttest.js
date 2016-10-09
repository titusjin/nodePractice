'use strict';

const moment = require('moment');

console.log(moment().valueOf());
console.log(new Date().getTime());

console.log(moment().subtract(30, 'minutes').valueOf());



