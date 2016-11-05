console.log('<0> schedule with setTimeout in 1-sec');
var t1 = setTimeout(function () {
    'use strict';
    console.log('[0] setTimeout in 1-sec boom!');
}, 1000);

console.log('<1> schedule with setTimeout in 0-sec');
setTimeout(function () {
    'use strict';
    console.log('[1] setTimeout in 0-sec boom!');
}, 0);

console.log('<2> schedule with setImmediate');
setImmediate(function () {
    console.log('[2] setImmediate boom!');
});

console.log('<3> A immediately resolved promise');
aPromiseCall().then(function (message) {
    console.log(message);
});

console.log('<4> schedule with process.nextTick');
process.nextTick(function () {
    console.log('[4] process.nextTick boom!');
});


function aPromiseCall () {
    return new Promise(function(resolve, reject) {
        resolve('[3] promise resolve boom!');
    });
}
