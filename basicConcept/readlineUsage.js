const fs = require('fs')
const readline = require('readline')

const Promise = require('bluebird')

let f = (filePath) => {
  let lr = readline.createInterface({
    input: fs.createReadStream(filePath)
  })


  let result = []
  lr
    .on('line', (line) => {
      console.log(line)
      result.push(line)
    })
    .on('close', ()=>{
      console.log('in the end')
      console.log(result);
    })
}


f('./polygon.txt')
