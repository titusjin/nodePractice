const logTag = '[MongoCommon]'

const axios = require('axios')
const cheerio = require('cheerio')
const utf8 = require('utf8')
const Promise = require('bluebird')

const MongoClient = require('mongodb').MongoClient

let domain = 'https://online.carrefour.com.tw/'
let uriArray = []

let handleE = (e) => {
  return e
}
let mongoConfig = {
  connectionStr: 'mongodb://localhost:27017/carrefour'
}

function saveIntoMongo (document) {
  const col = MongoConn.db.collection('prices')
  return new Promise((resolve, reject) => {
    col.insertOne(
      {
        'eventName': data.eventName,
        'startDate': data.startDate,
        'endDate': data.endDate,
        'eventCode': data.eventCode
      }).then(res => {
        resolve(res)
      })
  })
}

function doCraw (domain) {
  let uri = domain + 1502004600106
  let uri1 = domain + 1502004600105

  uriArray.push(uri, uri1)
  let option = {
    method: 'GET'
  }

  Promise.all(uriArray.map(p => {
    option.url = p
    return axios(option).catch(handleE)
  })).then(results => {
    results.forEach(r => {
      if (r.status == 200) {
        let $ = cheerio.load(r.data)
        let title = $('.pro-name').text()
        let price = $('.pro-price').children()[1].childNodes[2].next.children[0].data

        console.log(title)
        console.log(price)

        saveIntoMongo({title: title, price: price, sales: carrefour})
          .then(result => {
            console.log(result)
          })
          .catch( err => {
            Logger.error(err)
          })
      }
    })
  }).catch(err => {
    console.log('+++++ come to error +++', err)
  })
}

doCraw(domain)
