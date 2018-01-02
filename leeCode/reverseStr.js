const str = 'hello this is one messages from u'
let result = ''

let f = (str) =>{
  let originArray = str.split('')
  let resultArray = []

  const sum = originArray.length - 1
  const mas = sum/2
  for(let i = 0 ; i < mas ; i++){
    let j = sum - i
    resultArray[j] = originArray[i]
    resultArray[i] = originArray[j]
  }

  result = resultArray.join('')
  console.log(result)
}

f(str)
