'use strict';
const XML = require('xml');
const _ = require('lodash');
const moment = require('moment');

const source = [
  {
    "_id": "57fc3290a66986e64abad89b",
    "article_brief": "徐先生，\r\n\r\n新北市，31歲，一家5口\r\n\r\n保險經紀，年收入不透露\r\n\r\n「不能只懂的存錢，更要懂得開源節流。」這是從事保險經紀的徐先生，給年金改革的建議...",
    "article_content": "<p aid=\"61\">徐先生，</p>\r\n\r\n<p aid=\"62\">新北市，31歲，一家5口</p>\r\n\r\n<p aid=\"63\">保險經紀，年收入不透露</p>\r\n\r\n<p aid=\"64\">「不能只懂的存錢，更要懂得開源節流。」這是從事保險經紀的徐先生，給年金改革的建議。年金就像保險一樣，如果只是想著節流是不夠的，還要能夠創造更多的收入，雖然社會上對於軍公教年金的意見紛呈，但他覺得軍公教的年金「怎麼可以說不給就不給」。</p>\r\n\r\n<p aid=\"65\">31歲的徐先生的退休願望，是在新北市三重、蘆洲買房子和車子，還有結婚生子，因為自己喜歡出國，希望未來有能力可以出國。他曾經從事觀光業，但由於希望尋找一個能結合興趣、時間自由且多賺一點的工作，所以轉到保險業，這幾年轉業後的經驗，覺得保險真的很重要，所以有多幫自己和父母買些保單，這樣也可以不用太煩惱退休的生活。</p>\r\n\r\n<h2 class=\"subtitle2\">18%有限額 改革前不該停發</h2>\r\n\r\n<p aid=\"66\">談到年金改革的問題，徐先生表示，「政府該給軍公教的退休金就要給，怎麼可以說不給就不給，18%是有限額的，影響政府支出應該不會太嚴重，至少改革前的年金不該停發。」徐先生平時不太關注關於年金改革的問題，關於年金改革的資訊，也都是從新聞看到的，但他仍認為政府答應過軍公教的退休俸，應該要做到。</p>\r\n\r\n<p aid=\"67\">談到未來退休的問題，徐先生身為金融業從業人員，他表示：「沒想過要存到多少的退休金，因為平時有在購買儲蓄險和一些被動式收入穩定的股票，像是中華電信之類的，加上未來還有勞退收入，所以沒有太擔心自己的退休生活。」</p>\r\n\r\n<p aid=\"68\">家中的負擔和期許，是許多人規畫退休生活時的考量，徐先生說，未來的退休生活希望是穩定為主，因為家中房貸等還得差不多了，且目前該有的也都有，家裡的期望則是要他盡快結婚，好好住顧好家庭。</p>\r\n\r\n<h2 class=\"subtitle2\">經濟不景氣 相信台灣不會只有這樣</h2>\r\n\r\n<p aid=\"69\">說到台灣的未來時，徐先生說，各行各業現在都不景氣，能多賺一點是一點，但他相信不只有台灣是這個樣子，全世界都面對著這樣的問題，因為大環境只會更差，所以多增加自己的實力比較重要，才能讓退休生活更有保障。</p>\r\n\r\n<p aid=\"70\">此專題由Yahoo奇摩新聞和風傳媒共同合作，更多年金相關內容請看<a href=\"https://tw.news.yahoo.com/topic-pension/\" target=\"_blank\">《Yahoo大破產世代專輯》：https://tw.news.yahoo.com/topic-pension/</a></p>\r\n",
    "article_related_id": [
      "174718",
      "173847",
      "173452",
      "173046",
      "172273"
    ],
    "article_related_title": [
      "大破產世代─幼保人員》「勞工薪水低、物價一直漲」 景氣低迷不敢想退休",
      "大破產世代─叢書主編》「年金改革要多溝通」 輿論影響對公務員不公平",
      "大破產世代─社群編輯》「軍公教福利也是爭取來的」 應該調高勞工福利",
      "大破產世代─學生》政府負資產過高必須改革 期許自己「活到老、做到老」",
      "大破產世代─媒體公關》「對台灣政治經濟沒信心」 退休金要靠努力兼職"
    ],
    "article_image_home": "http://image.cache.storm.mg/styles/smg-600x400-fp/s3/media/image/2015/04/23/20150423-095741_U589_M55190_7861.jpg?itok=Uh2ujOTQ",
    "article_date_update": 1476147885,
    "article_date_publish": 1476147601,
    "article_category_hash": {
      "22168": "公共政策",
      "22172": "國內",
      "23083": "財經"
    },
    "article_author_type": "工讀生",
    "article_author_hash": {
      "66974": "杜承翰"
    },
    "article_title": "大破產世代─保險經紀》「怎麼可以說不給就不給」 政府答應的要做到",
    "nid": "176047"
  },
  {
    "_id": "57fc3290a66986e64abad89b",
    "article_brief": "徐先生，\r\n\r\n新北市，31歲，一家5口\r\n\r\n保險經紀，年收入不透露\r\n\r\n「不能只懂的存錢，更要懂得開源節流。」這是從事保險經紀的徐先生，給年金改革的建議...",
    "article_content": "<p aid=\"61\">徐先生，</p>\r\n\r\n<p aid=\"62\">新北市，31歲，一家5口</p>\r\n\r\n<p aid=\"63\">保險經紀，年收入不透露</p>\r\n\r\n<p aid=\"64\">「不能只懂的存錢，更要懂得開源節流。」這是從事保險經紀的徐先生，給年金改革的建議。年金就像保險一樣，如果只是想著節流是不夠的，還要能夠創造更多的收入，雖然社會上對於軍公教年金的意見紛呈，但他覺得軍公教的年金「怎麼可以說不給就不給」。</p>\r\n\r\n<p aid=\"65\">31歲的徐先生的退休願望，是在新北市三重、蘆洲買房子和車子，還有結婚生子，因為自己喜歡出國，希望未來有能力可以出國。他曾經從事觀光業，但由於希望尋找一個能結合興趣、時間自由且多賺一點的工作，所以轉到保險業，這幾年轉業後的經驗，覺得保險真的很重要，所以有多幫自己和父母買些保單，這樣也可以不用太煩惱退休的生活。</p>\r\n\r\n<h2 class=\"subtitle2\">18%有限額 改革前不該停發</h2>\r\n\r\n<p aid=\"66\">談到年金改革的問題，徐先生表示，「政府該給軍公教的退休金就要給，怎麼可以說不給就不給，18%是有限額的，影響政府支出應該不會太嚴重，至少改革前的年金不該停發。」徐先生平時不太關注關於年金改革的問題，關於年金改革的資訊，也都是從新聞看到的，但他仍認為政府答應過軍公教的退休俸，應該要做到。</p>\r\n\r\n<p aid=\"67\">談到未來退休的問題，徐先生身為金融業從業人員，他表示：「沒想過要存到多少的退休金，因為平時有在購買儲蓄險和一些被動式收入穩定的股票，像是中華電信之類的，加上未來還有勞退收入，所以沒有太擔心自己的退休生活。」</p>\r\n\r\n<p aid=\"68\">家中的負擔和期許，是許多人規畫退休生活時的考量，徐先生說，未來的退休生活希望是穩定為主，因為家中房貸等還得差不多了，且目前該有的也都有，家裡的期望則是要他盡快結婚，好好住顧好家庭。</p>\r\n\r\n<h2 class=\"subtitle2\">經濟不景氣 相信台灣不會只有這樣</h2>\r\n\r\n<p aid=\"69\">說到台灣的未來時，徐先生說，各行各業現在都不景氣，能多賺一點是一點，但他相信不只有台灣是這個樣子，全世界都面對著這樣的問題，因為大環境只會更差，所以多增加自己的實力比較重要，才能讓退休生活更有保障。</p>\r\n\r\n<p aid=\"70\">此專題由Yahoo奇摩新聞和風傳媒共同合作，更多年金相關內容請看<a href=\"https://tw.news.yahoo.com/topic-pension/\" target=\"_blank\">《Yahoo大破產世代專輯》：https://tw.news.yahoo.com/topic-pension/</a></p>\r\n",
    "article_related_id": [
      "174718",
      "173847",
      "173452",
      "173046",
      "172273"
    ],
    "article_related_title": [
      "大破產世代─幼保人員》「勞工薪水低、物價一直漲」 景氣低迷不敢想退休",
      "大破產世代─叢書主編》「年金改革要多溝通」 輿論影響對公務員不公平",
      "大破產世代─社群編輯》「軍公教福利也是爭取來的」 應該調高勞工福利",
      "大破產世代─學生》政府負資產過高必須改革 期許自己「活到老、做到老」",
      "大破產世代─媒體公關》「對台灣政治經濟沒信心」 退休金要靠努力兼職"
    ],
    "article_image_home": "http://image.cache.storm.mg/styles/smg-600x400-fp/s3/media/image/2015/04/23/20150423-095741_U589_M55190_7861.jpg?itok=Uh2ujOTQ",
    "article_date_update": 1476147885,
    "article_date_publish": 1476147601,
    "article_category_hash": {
      "22168": "公共政策",
      "22172": "國內",
      "23083": "財經"
    },
    "article_author_type": "工讀生",
    "article_author_hash": {
      "66974": "杜承翰"
    },
    "article_title": "大破產世代─保險經紀》「怎麼可以說不給就不給」 政府答應的要做到",
    "nid": "176047"
  }
]


function prepareXMLData(array){
    var articles = [];

    array.forEach(function(node){

        if(_.isEmpty(node.article_related_title)){
            var relatedContent = '';
        }else{
            var relatedContent = '';
            node.article_related_title.forEach(function(title, index){
                if(index <= 1){
                    relatedContent += " ● <a href=\"http://www.storm.mg/article/" + node.article_related_id[index] + "?utm_source=Yahoo&utm_medium=%E7%9B%B8%E9%97%9C%E5%A0%B1%E5%B0%8E%E9%BB%9E%E6%93%8A&utm_campaign=Y!News_RelatedCoverage target=\"_blank\" />" + title + "</a><br />";
                }
            });
        }

        var xml = [
            {rss: [
                    {_attr: {
                            "xmlns:media"  : "http://search.yahoo.com/mrss/",
                            "xmlns:dc"     : "http://purl.org/dc/elements/1.1/",
                            "xmlns:tvg"    : "http://rss.tvguide.com/extensions",
                            "xmlns:content": "http://purl.org/rss/1.0/modules/content/",
                            "version"      : "2.0"
                        }
                    },
                    {channel :[
                            {title : node.article_title.replace(/(\{|\}|(\r?\n))/g, '')},
                            {item : [
                                        {title :node.article_title.replace(/(\{|\}|(\r?\n))/g, '')},
                                        {link  : "http://www.storm.mg/article/" + node.nid},
                                        {guid  : [{
                                                    _attr : {
                                                        "isPermaLink" : "true"
                                                   }},
                                                   parseInt(node.nid) + 16000000
                                                 ]
                                        },
                                        {description : node.article_brief.replace(/\r?\n/g, "")},
                                        {valid : "2200/12/31 00:00"},
                                        {pubDate : moment.unix(node.article_date_publish).format('YYYY/MM/DD hh:mm')},
                                        {"content:encoded" :
                                            {_cdata: "<img class=\"editorial\" src=\"" + node.article_image_home + "\" width=\"600\" height=\"400\" align=\"middle\">" + node.article_content.replace(/<img/,"<img class=\"editorial\" style=\"max-width:600px\" align=\"middle\"").replace(/\r?\n/g, "").replace(/<(a|\/a)("[^"]*"|'[^']*'|[^'">]|)*>/g, "").replace(/<iframe/g, "<iframe style=\"max-width:600px\"") + relatedContent + "</p>"
                                            }
                                        },
                                        {category : node.article_category_hash[Object.keys(node.article_category_hash)[0]]},
                                        {"media:content" :
                                            {_attr :{
                                                    url  : node.article_image_home,
                                                    type : "image/jpeg"
                                                }
                                            }
                                        },
                                        {"dc:creator" : node.article_author_hash[Object.keys(node.article_author_hash)[0]]
                                        }
                                    ]
                            }
                        ]
                    }
                ]
            }
        ];

        articles.push(XML(xml));
        // if(articles.length == array.length){
        //     console.log(articles);
        //     gen.next();
        // }
    });

    return articles;
}

function doSecond(xmlFeeds){
    console.log('YES YES YES YES YES YES YES ');
    console.log(xmlFeeds);
}


function* doIt(){
    var now = new Date();
    console.log('******************************************************');
    console.log('Upload begin : ' + now.toLocaleString() );
    console.log('******************************************************');

    console.log('Prepare FTP RSS Feeds...');
    console.log('------------------------------------------------------');
    var xmlFeeds = prepareXMLData(source);
    console.log('FTP RSS Feeds DONE!');
    console.log('------------------------------------------------------');
    yield;

    console.log('hello');
    console.log(xmlFeeds);
    console.log('1111111111111111111111111111111111111111111111111111');
    yield;

    console.log('second hello ');
    doSecond(xmlFeeds);
    console.log('2222222222222222222222222222222222222222222222222222');
    yield;
}

var gen = doIt();
var xmlFeeds = gen.next().value;
gen.next(xmlFeeds);
gen.next(xmlFeeds);

