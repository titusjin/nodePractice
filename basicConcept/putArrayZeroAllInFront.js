/**
 * [0,1,0,3,2,0,4] --> [0,0,0,1,3,2]
 */

let input = [0,1,0,3,2,0,4];

let arrange = (input) => {
  
  for(let i = 0 ; i < input.length ; i++){

    if( input[i] !== 0 ){
      if( input[i+1] == 0 ){
        let j = input[i+1];
        input[i+1] = input[i];
        input[i] = j;

        // another index to identify if we need to move the zero element moving forward
        let k = i;

        while( k-1 !== 0 && input[k-1] !== 0 ){
          j = input[k-1];
          input[k-1] = input[k];
          input[k] = j; 
          k--;
        }
        
        i++;
      }
    }
  }

  console.log(input);
}

arrange(input);

