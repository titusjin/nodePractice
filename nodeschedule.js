'use strict';

const schedule = require('node-schedule');


schedule.scheduleJob('* * * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});
