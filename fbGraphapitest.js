var Request = require('request');

function callAPI(api, callback){
    var options = {
          uri : api,
          method :  'GET',
          headers:  {
              'Cache-Control': 'private, no-cache, no-store, must-revalidate',
              'Expires': '-1',
              'Pragma': 'no-cache'
          }
    };


    Request(options, function (err, response, body) {
        if (err) {
            return callback(err);
        };
        var statusCode = response.statusCode;

            switch(statusCode){
                case 200 :
                    try{
                        var parsed = JSON.parse(body);
                        console.log('success !!!!');
                        console.log(parsed);
                    }catch(err){
                        console.error(err);
                    }
                    break;
                case 404 :
                    console.log('404 Not Found.');
                    break;
                default :
                    console.log('api call error : ' + body);
            }

      });
}

callAPI('https://graph.facebook.com/v2.7/http://www.storm.mg/article/157580?access_token=917307478388825|ba750704881d6d0c1cb3c7245c37af31');

