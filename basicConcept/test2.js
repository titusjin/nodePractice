let requests = [
  {requestId: 'poiax', startedAt: 1489744808, ttl: 8},
  {requestId: 'kdfhd', startedAt: 1489744803, ttl: 3},
  {requestId: 'uqwyet', startedAt: 1489744806, ttl: 12},
  {requestId: 'qewaz', startedAt: 1489744810, ttl: 1}
]

let cumulativeTtl = 15

let accu_TTL = (requests) => {
  let miniSecondDiffLimit = 2

  requests.sort((a, b) => {
    return a.startedAt - b.startedAt
  })

  let temp = 0
  let result = 0
  for (let i = 0; i < requests.length; i++) {
    if( i == 0 ){
      temp = requests[i].startedAt
      result += requests[i].ttl
    }else{
      if( (requests[i].startedAt - temp) > miniSecondDiffLimit ){
        result += requests[i].ttl
      }
      temp = requests[i].startedAt
    }
  }
  return result;
}

console.log(accu_TTL(requests))
