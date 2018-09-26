/**
 * time complexity : O(n)
 */
function reverseStr1(input){
  try{
    let s = input.split('');
      let resultArray = [];
      
      let length = s.length;
      for(let i = length -1 ; i >= 0  ; i--){
        resultArray.push(s[i]);
      }

      return resultArray.join('');
  }catch(e){
    console.error(e);
    console.error('INVALID INPUT FORMAT');
  }
}

/**
 * time complexity : O(n/2)
 */
function reverseStr2(input){
  let result = '';
  let length = input.length;

  let mid = ( (length % 2) == 0 ) ? length / 2 : (length / 2) + 1;
  let sum = length - 1;

  for( let i = 0 ; i < mid ; i++ ){
    let j = input[i];
    input[i] = input[length - i];
    input[length - 1] = j;
  }

  return input;
}

let res1 = reverseStr1('Grindr is one big company and suitable place for titus!')
let res2 = reverseStr1('Grindr efg');

console.log(res1);
console.log(res2);