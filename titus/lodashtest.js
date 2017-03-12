const _ = require('lodash');
const moment = require('moment');

let data = [
    {'_id': '1', 'time': '2017-01-02'},
    {'_id': '2', 'time': '2017-01-11'},
    {'_id': '3', 'time': '2017-01-03'},
    {'_id': '4', 'time': '2016-12-01'}
];


data.map(function(d){
    d.week = moment(d.time).format('YYYY-WW');
});

console.log(data);

let result = _.groupBy(data, 'week');
result = _.mapValues(result, function(d){return d.length});

console.log(result);
