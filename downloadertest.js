var wget = require('wget');
var src = 'http://opendata.cwb.gov.tw/govdownload?dataid=E-A0016-001R&authorizationkey=rdec-key-123-45678-011121314';
var output = '/tmp/data.xml';
var options = {
    protocol: 'http',
    host: 'opendata.cwb.gov.tw',
    path: '/govdownload?dataid=E-A0016-001R&authorizationkey=rdec-key-123-45678-011121314',
    method: 'GET'
};

var req = wget.request(options, function(res) {
    var content = '';
    if (res.statusCode === 200) {
        res.on('error', function(err) {
            console.log(err);
        });
        res.on('data', function(chunk) {
            content += chunk;
        });
        res.on('end', function() {
            console.log(content);
        });
    } else {
        console.log('Server respond ' + res.statusCode);
    }
});

req.end();
req.on('error', function(err) {
    console.log(err);
});

