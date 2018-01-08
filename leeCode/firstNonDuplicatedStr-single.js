/**
 * input one string and return the first non-duplicated characters
 */
const str = 'Techanial question';

let f = (str) => {
    let result = '';

    let oriCharArray = str.toLowerCase().split('');
    let testCharArray = str.toLowerCase().split('').sort().join('')
    try{
        oriCharArray
            .forEach((c, index, array) => {
                let firstIdx = testCharArray.indexOf(c);
                if(testCharArray.charAt(firstIdx + 1) !== c){
                    result = c
                    throw new Error('found it !')
                }
            })
    }catch(error){
        return result
    }
    

    return result.join('')
}

console.log(f(str))
