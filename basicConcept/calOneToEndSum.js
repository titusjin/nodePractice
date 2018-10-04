'use strict';

function cal1(input){
  let now = new Date().getMilliseconds();
  let result = 0;
  
  if(input >= 0 ){
    for(let i = 1 ; i <= input ; i++){
      result += i;
    }
  }
  
  console.log('cal1 costs in mili-seconds : ', new Date().getMilliseconds() - now);
  return result;
}


/**
 * it is just one 等差數列計算公式
 * As a result, I don't have 
 * 
 */
function cal2(input){
  let now = new Date().getMilliseconds();
   
  let result =  input*(input + 1)/2;
  
  console.log('cal2 costs in mili-seconds : ', new Date().getMilliseconds() - now);
  return result;
}

let result1 = cal1(100000000);
let result2 = cal2(100000000);

console.log(result1);
console.log(result2);