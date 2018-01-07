let str0 = 'anagram'
let str1 = 'nagaram'

let str2 = 'rat'
let str3 = 'nat'

let result = false
let f = (test, ori) => {
  if(test.length !== ori.length){
    return result
  }

  test = test.split('').sort().join('')
  ori = ori.split('').sort().join('')

  if(test == ori){
    result = true
  }

  return result
}

console.log(f(str0, str2))
