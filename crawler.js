'use strict';

const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const xj = require('xml2js').parseString;
const xml2js = require('xml2js');
const XML = require('xml');
const Promise = require('promise');

var options = {
    uri: 'http://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html',
    transform: function (body) {
        return cheerio.load(body);
    }
};

// data.gov.tw : for earthquake
var options1 = {
    // 顯著有感地震報告
    // uri: 'http://opendata.cwb.gov.tw/govdownload?dataid=E-A0015-001R&authorizationkey=rdec-key-123-45678-011121314',
    // 小區域有感地震報告 -- 資料更新速度似乎較上者為快
    uri : 'http://opendata.cwb.gov.tw/govdownload?dataid=E-A0016-001R&authorizationkey=rdec-key-123-45678-011121314',
    method: 'get',
    headers: {
            'Cache-Control': 'private, no-cache, no-store, must-revalidate',
            'Expires': '-1',
            'Pragma': 'no-cache'
    },
    resolveWithFullResponse : true
}

function makeXML(jsonData){
    return new Promise(function(resolve, reject){
        console.log('in makeXML promise ....');
        var rootData = jsonData.cwbopendata.dataset[0];

        var xml = [
            {rss: [
                    {_attr: {
                            'xmlns:media'  : 'http://search.yahoo.com/mrss/',
                            'xmlns:dc'     : 'http://purl.org/dc/elements/1.1/',
                            'xmlns:tvg'    : 'http://rss.tvguide.com/extensions',
                            'xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
                            'version'      : '2.0'
                        }
                    },
                    {channel :[
                            {title : rootData.datasetInfo[0].issueTime[0]},
                            {item : [
                                        {title :rootData.datasetInfo[0].issueTime[0]},
                                        {link  : 'http://www.storm.mg'},
                                        {guid  : [{
                                                    _attr : {
                                                        'isPermaLink' : 'true'
                                                    }},
                                                    '1345678']
                                        }
                                    ]
                            }
                        ]
                    }
                ]
            }
        ];

        console.log(XML(xml));
        resolve(XML(xml));
    });
}

rp(options1).then(
    function(response){
        var data = response.body;
        var nextPromise;
        // cause data return in xml format, we have to JSON stringify first
        xj(data,{ trim: true }, function(err, result){
            var jsonData = JSON.parse(JSON.stringify(result));
            console.log(jsonData.cwbopendata
                .dataset[0].datasetInfo[0].issueTime[0]);

            nextPromise = makeXML(jsonData);
        });

        return nextPromise;
    }

).then(
    function(message){
        console.log('------------- resolve');
        console.log(message);
    }
).catch(function(err){
    console.log(err);
});


// rp(options)
//     .then(function ($) {
//         // Process html like you would with jQuery...
//         // var aTitle = $('#story_body').text();
//         console.log($.text());
//     })
//     .catch(function (err) {
//         console.error(err);
//     });

