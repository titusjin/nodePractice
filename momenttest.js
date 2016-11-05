'use strict';

const moment = require('moment');

console.log(moment().valueOf());
console.log(new Date().getTime());

console.log(moment().subtract(30, 'minutes').valueOf());

console.log(moment.unix(1476147601).format('YYYY/MM/DD hh:mm'));

console.log(moment('2016-10-24T05:35:55+08:00').format('YYYY/MM/DD hh:mm'));

