'use strict';

const moment = require('moment');
moment.locale('e');

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
console.log(moment().toISOString());

console.log('test local');
console.log(utc0);
console.log(moment(utc0).local().format());
console.log('the iso week might like : ');

var weekTestYear = moment('2017-01-01').format('YYYY');
console.log(weekTestYear);   // 2017
console.log(moment('2017-04-01').week()); // 1

console.log(moment(moment().toISOString()).utcOffset(10).format('YYYY-MM-DD HH:mm:ssZ'));

// let transfer = current.local();
// console.log(transfer.format('YYYY-MM-DD HH:mm:ss ZZ'));
// var dd = moment('2016-11-23T10:27:00+08:00').utcOffset(offset).format('YYYY-MM-DD HH:mm:ss Z');


// const str = 'Android/1.9.9.28(161129D)';
// var index = str.indexOf('(');
// console.log(str.substring(0, index));

console.log(moment().utcOffset(0).toISOString());
console.log(moment().subtract(1, 'years').format('YYYY-MM-DD'));
console.log(moment('2017-05-18T07:05:57.000Z').format('YYYY-MM-DD'));

console.log('+++++++++++');
console.log('開始做一些計算');
let start = moment('2016-01-01').format('YYYY-MM');
let end = moment('2017-12-31').format('YYYY-MM');
let testArray = [start];

let test = moment(start).add(1, 'M');
while(moment(end).diff(test) >= 0){
    testArray.push(test.format('YYYY-MM'));
    test = moment(test).add(1, 'M');
}
console.log(testArray);
console.log('做完一些計算');
console.log('+++++++++++');

console.log(moment().format('YYYY') + '-' + moment().week());
console.log(moment().add(1, 'weeks'));

console.log(moment('2017-05-14').week());
let endWeekday = moment('2017-05-15').add(6 - moment('2017-05-15').weekday(), 'days');
console.log(endWeekday);
console.log( endWeekday.diff(moment('2017-05-26')) );


console.log('nonlnononononononlllllll');
console.log(moment('2016/6/6', 'YYYY/M/D').utcOffset(0).toISOString());

console.log('check time caculation : ');
console.log(moment('2016-04-22T17:29:37+0800', moment.ISO_8601).add(2, 'Y').toISOString());


console.log('unix timestamp test : ', moment().unix());
console.log('------------------------------------');

console.log(moment.utc('2017-06-10 16:00:00').utcOffset(8).format('YYYY-MM-DD'));


let unixtime = moment('2017-07-01').utcOffset(0).unix();
console.log( moment('2017-07-01').utcOffset(0).toISOString());
console.log(moment.unix(unixtime).toISOString());

console.log(moment('2017-07-09').unix());

console.log('+_+_+_+_+_+_+_+_+_+_+_+_');
let now = moment().format('YYYY-MM-DD');
console.log(moment(now).utcOffset(0).toISOString());

console.log('+_+_+_+_+_+_+_+_+_+_+_+_');
console.log(moment('2017/08/01').startOf('day').format('YYYY-MM-DD HH:mm ZZ'));
console.log(moment('2017/08/01').endOf('day').format('YYYY-MM-DD HH:mm ZZ'));
console.log(moment('2017-08-01').utcOffset(0).unix());
console.log('end');

console.log(moment().valueOf().toString());
console.log(moment(parseInt('1513482567331', 10)).format('MMMM Do YYYY, h:mm:ss a'));


console.log(moment('2017-01-01T00:00:00+0800', moment.ISO_8601).valueOf());
console.log(moment('2017-12-01T23:59:59+0800', moment.ISO_8601).valueOf());


console.log('++++++++++++ final ++++++++++++++');
let ori = moment('2018-02-06 20:11:00 +8');
test = moment('2018-03-02 18:30:01 +8');
console.log(ori.diff(test));
console.log(ori.endOf('day').format('YYYY-MM-DD HH:mm:ss ZZ'));
