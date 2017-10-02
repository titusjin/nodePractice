'use strict';
const _ = require('lodash');


const testdata = [{'groupId': '1'}, {'groupId': '2'}, {'groupId': '3'}, {'groupId': '4'}];
const creita = ['2', '3'];

creita.forEach(function(c){
    console.log(c);
    let result = _.remove(testdata, function(o){
        console.log('groupId we have is : ' , o.groupId);
        return o.groupId == c;
    });
});
console.log('testData' , testdata);
console.log('下一個+++++++');

const userdata = [{'name': 'deep'}, {'name': 'blu'}, {'name': 'hello'}];
const userdata1 = [{'name': 'deep'} , {'name': 'world'}];

let concatResult = _.union(userdata, userdata1);
console.log(concatResult);


console.log('下一個+++++++');
const testArray = [ '2016-01',
  '2016-02',
  '2016-03',
  '2016-04',
  '2016-05',
  '2016-06',
  '2016-07',
  '2016-08',
  '2016-09',
  '2016-10',
  '2016-11',
  '2016-12',
  '2017-01',
  '2017-02',
  '2017-03',
  '2017-04',
  '2017-05',
  '2017-06',
  '2017-07',
  '2017-08',
  '2017-09',
  '2017-10',
  '2017-11',
  '2017-12' ];

const rowData = [
    {
      "count": 2276,
      "year_month_number": "2017-04",
      "year": 2017,
      "month": 4
    },
    {
      "count": 1062,
      "year_month_number": "2017-05",
      "year": 2017,
      "month": 5
    }
];
let temp = _.times(testArray.length, _.constant(0));
console.log('temp array like : ', temp);

_.forEach(rowData , (value, key) => {
    let index = _.findIndex(testArray, function(a){
        return a == value['year_month_number'];
    });

    console.log(index);
    temp.splice(index, 1, value['count']);
});

console.log(temp);
