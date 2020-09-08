const request = require("request");
const cheerio = require("cheerio");
const fs= require("fs");
const WriteStream = fs.createWriteStream('game.csv');

WriteStream.write('HEADING \n');



request('https://www.theblogstarter.com/', (error,response, html) => {
if(!error && response.statusCode == 200) {
   const $ = cheerio.load(html);

   const siteHeading = $('.copyright') ;
   console.log(siteHeading.text());


  

 console.log('Scraping Done!')  
  
  
}

});



function trial(siteHeading) {
  WriteStream.write(siteHeading);
};


