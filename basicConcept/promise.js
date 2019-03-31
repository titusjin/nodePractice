function p1(val){
  console.log('hello resolve', val);
}
function p2(val){
  console.log('hello reject', val);
}

/**
 * below can also be written like: 
 * const pro = new Promise( (res, rej) => {
 *  let x = 1;
 *  if(x>1){
 *    res(x);
 *  }else{
 *    rej(x);
 *  }
 * });
 * 
 * 簡單說就是定義在 then 裡面的東西 會去取代掉原先帶入 Promise constructor 的函式
 * 所以如果沒有定義 then 
 * 
 */
const pro = new Promise( (p1, p2) => {
  let x = 1;
  if(x>0){
    p1(x);
  }else{
    p2(x);
    // throw new Error('just try to test...');
  }
});

pro
  .then(()=>{

  },()=>{
    
  })
  .catch(error => {
    console.log('trigger error section:',error.message);
  });