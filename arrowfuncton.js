// 'use strict';

const moment = require('moment');

/*
    Test array native methods
 */
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];
// var a2 = a.map(
//     function(s, index, array){
//             console.log(s);
//             console.log(index);
//             console.log(array);
//             return s.length;
// });
// console.log(a2);


/**
    test arrow function specific this binding
 **/
// var t  = {
//    sayThis : () => {
//        console.log(this);
//    }
// }
var tt = {
    getToday(){
        return moment().format('YYYY/MM/DD hh:mm');
    },
    sayHello(){
        var todayStr = () => this.getToday();
        console.log(todayStr());
    }
}

var s = (a) => a>0;

console.log(s(1));
console.log(tt.sayHello());
