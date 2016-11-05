// 'use strict';

const Promise = require('promise');
const moment = require('moment');

var sendMessage = (function(){
    // 'use strict';

    console.log(this);

    var result = {
        name: 'deeeeeeee',
        getToday(){
            return moment().format('YYYY/MM/DD hh:mm');
        },
        sayhello(){
            var todayStr = () => this.getToday();

            console.log(todayStr());
            return new Promise(function(resolve, reject){
                console.log(this);

                console.log('I am in sayHello promise');
                resolve('good Timothey');
            });
        },
        sendMessage: (message) =>{
            return new Promise(function(resolve, reject){
                console.log('I am in sendMessage promise');
                resolve(message);
            });
        }
    };

    return result;
})();

module.exports= sendMessage;
