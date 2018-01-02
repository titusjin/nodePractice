let str0 = 'anagram'
let str1 = 'nagaram'

let str2 = 'rat'
let str3 = 'nat'

let f = (ori, test) =>{
  let result = true

  if(ori.length !== test.length){
    return false
  }else{
    let oriArray = ori.split('')
    let oriArraylength = ori.length
    let testArray = test.split('')
    let testArraylength = test.length

    for(let i = 0 ; i < testArraylength ; i++){
      let testChar = testArray[i]
      if(result){
        for(let j = 0 ; j < oriArraylength ; j++){

          let oriChar = oriArray[j]
          if( testChar === oriChar ){
            oriArray.splice(j, 1)
            oriArraylength -= 1
            j -= 1
            result = true
            break
          }else{
            result = false
          }

        }
      }else{
        break
      }
    }

  }
  return result
}


console.log(f(str2, str0))
