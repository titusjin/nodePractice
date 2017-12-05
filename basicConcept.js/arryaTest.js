let origin = [
    {'rat': 1},
    {'rat': 3},
    {'rat': 4},
    {'rat': 5},
    {'rat': 2},
    {'rat': 2},
    {'rat': 1}
]

let temp = 0;
let sum = origin.reduce((acu, cur) => {
    console.log('pre: ', acu);
    console.log('cur: ', cur);

    return acu += cur.rat;
}, 0);

console.log(sum/origin.length);
