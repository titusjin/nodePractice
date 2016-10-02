'use strict';

var rp = require('request-promise');
var cheerio = require('cheerio');


var options = {
    uri: 'http://udn.com/news/story/1/1997287',
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(function ($) {
        // Process html like you would with jQuery...
        var aTitle = $('#story_body').text();
        console.log(aTitle);
    })
    .catch(function (err) {
        console.error(err);
    });

