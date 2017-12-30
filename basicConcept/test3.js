const fs = require('fs')
const readline = require('readline')

let f = (filePath) => {
  let triangles = []
  let reactangles = []
  let squares = []
  let others = []

  let sorting = (charArray) => {
    return charArray.sort((a, b) => {
      return a - b < 0
    })
  }

  let makeSureTringle = (charArray) => {
    charArray = sorting(charArray)

    if (parseInt(charArray[2], 10) + parseInt(charArray[1], 10) > parseInt(charArray[0], 10)) {
      triangles.push(charArray)
    }else{
      others.push(charArray)
    }
  }
  let divideQuadrilateral = (charArray) => {
    charray = sorting(charArray)
    if( !!charArray.reduce((a, b) => { return (a === b) ? a : NaN }) ){
        squares.push(charray)
    }else{
      if(
        parseInt(charArray[3],10) + parseInt(charArray[2], 10) + parseInt(charArray[1], 10) > parseInt(charArray[0], 10)
      ){
        reactangles.push(charArray)
      }else{
        others.push(charArray)
      }
    }
  }

  let lr = readline.createInterface({
    input: fs.createReadStream(filePath)
  })
  lr.on('line', (line) => {
    let charArray = line.split(',')

    if (charArray.length === 3) {
      makeSureTringle(charArray)
    } else if (charArray.length === 4) {
      divideQuadrilateral(charArray)
    } else {
      others.push(charArray)
    }
  })
}

f('./polygon.txt')
