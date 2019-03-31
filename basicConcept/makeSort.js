const input1 = [1,3,2,5,4,7,6,10,9];

/**
 * input one array with numbers 
 * output the array with decent order.
 * 
 * @param {*} input 
 */
let cSourt = (input) => {
  let result = [];
  let temp = input[0] - input[1];

  if(temp > 0){
    result.push(input[0], input[1]);
  }else{
    result.push(input[1], input[0]);
  }

  findPosition(){
    
  }

  for(let i = 2 ; i < input.length ; i++){
    let compare = input[i] - temp[temp.length -1];
    compare >= 0 
    ? temp.push(input[i]);
    : findPosition(input[i], temp);
  }
}