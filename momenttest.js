'use strict';

const moment = require('moment');

// console.log(moment().valueOf());
// console.log(new Date().getTime());
//
// console.log(moment().subtract(30, 'minutes').valueOf());
//
// console.log(moment.unix(1476147601).format('YYYY/MM/DD hh:mm'));
//
// console.log(moment().format('YYYY-MM-DD HH:mm:ss Z'));



// let current = moment.utc('2016-12-04T05:15:20.000Z');
let current = moment(moment().format('YYYY-MM-DD HH:mm:ssZ'));
let offset =  moment().utcOffset();
console.log(moment().utcOffset());

// moment(current).utcOffset().format('YYYY-MM-DD HH:mm:ssZ');
let utc0 = moment(current).utcOffset(0).toISOString();
console.log(utc0);
console.log(moment().toISOString());

console.log(moment(moment().toISOString()).utcOffset(10).format('YYYY-MM-DD HH:mm:ssZ'));

// let transfer = current.local();
// console.log(transfer.format('YYYY-MM-DD HH:mm:ss ZZ'));
// var dd = moment('2016-11-23T10:27:00+08:00').utcOffset(offset).format('YYYY-MM-DD HH:mm:ss Z');


// const str = 'Android/1.9.9.28(161129D)';
// var index = str.indexOf('(');
// console.log(str.substring(0, index));
