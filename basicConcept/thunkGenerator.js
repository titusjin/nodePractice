let fs = require('fs')

/**
 * Javascript thunk fuction is not same as what computer science mentioed.
 * There is npm module : thunkify which can make one function to thunk.
 *
 * below is one explanation but the code is not clear but show-off.
 * clear code can directly be checked on source code of tunkify npm module.
 *
 */
let Thunk = (fn) => {
  return function () {
    // more clear code would be :
    // var args = new Array(arguments.length);
    // for(let i = 0 ; i < args.length ; i++){
    //   args[i] = arguments[i]
    // }
    var args = Array.prototype.slice.call(arguments)

    return function (callback) {
      args.push(callback)
      return fn.apply(this, args)
    }
  }
}

let readFileThunk = Thunk(fs.readFile)
readFileThunk(fileName)(callback)
