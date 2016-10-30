'use strict';

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(
        function(s, index, array){
                console.log(s);
                console.log(index);
                console.log(array);
                return s.length;
        });

console.log(a2);
