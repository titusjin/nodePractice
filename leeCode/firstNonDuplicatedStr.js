/**
 * input one string and return the characters, that not replicated in the string, in string format
 */
const str = 'Techanical question'

let f = (str) => {
    let result = []

    let oriCharArray = str.toLowerCase().split('')
    let inputSortStr = str.toLowerCase().split('').sort().join('')
    
    oriCharArray
    .forEach(function(c, index, array){
        let firstIdx = inputSortStr.indexOf(c)

        if(inputSortStr.charAt(firstIdx + 1) !== c){
            result.push(c)
        }
    })

    return result.join('')
}

console.log(f(str))
