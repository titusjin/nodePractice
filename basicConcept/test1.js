let a = [2, 4, 6, 8, 9, 15];
let b = ['4', '16', '64'];

let transfer = (a) => {
  let result = [];

  for(let i = 0 ; i < a.length/2 ; i++){
    result.push( Math.pow(2, a[i]) );
  }
  return result;
}

console.log(transfer(a));
