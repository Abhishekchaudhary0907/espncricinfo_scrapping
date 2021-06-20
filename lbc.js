const request = require('postman-request');
const cheerio = require('cheerio');
const { text } = require('cheerio/lib/api/manipulation');

console.log("webscarraping start");
request("https://www.espncricinfo.com/series/icc-world-test-championship-2019-2021-1195334/india-vs-new-zealand-final-1249875/ball-by-ball-commentary",cb);

function cb(err, res, html){
    if(err){
        throw new Error();
    }

    extractHtml(html);
}

function extractHtml(html){
    let $ = cheerio.load(html);
    const contentArr = $(".mb-5,.match-comment-long-text");
    const text = $(contentArr[0]);
    console.log($(text[0]).text());
    const htmlData = $(contentArr[0]).html();

    const contentArr = $('.match-body, .match-scorecard-page,.table, .bowler');
    const wicket = $(contentArr).text();
    console.log(wicket);
    
}