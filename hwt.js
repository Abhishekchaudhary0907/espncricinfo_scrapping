const request = require('postman-request');
const cheerio = require('cheerio');

const url = "https://www.espncricinfo.com/series/icc-world-test-championship-2019-2021-1195334/india-vs-new-zealand-final-1249875/full-scorecard"
console.log("webscarraping start");
request(url,cb);

function cb(err, res, html){
    if(err){
        throw new Error();
    }

    extractHtml(html);
}

function extractHtml(html){
    let $ = cheerio.load(html);

    const contentArr = $('.match-body, .match-scorecard-page, .bowler, .table');
    const wicket = $(contentArr).text();
    console.log(wicket);
    
}