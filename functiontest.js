'use strict';

var Feed = (message) =>{
    var one = (message) => {
        console.log(message);
    };
    return one(message);
}

Feed.one = (message) => {
    console.log(message);
}


/**
  * In nodejs the below var c1 for declaring constructor not working.
  * Different to the usage on client-side
 **/
// var c1 = function(name){
//     this.name = name;
// }
function c1 (name){
    this.name = name;
};


(function(){
    console.log(typeof Feed);
    Feed('hello titus');
    Feed.one('outer defined function');

    var insc1 = new c1('titus');
    console.log(insc1.name);

})();