const express = require('express');
const path = require('path');
const app= express();
const cheerio = require('cheerio');
const request = require ('request');
const fs= require('fs');
const port = 8080;


const url= "https://www.theblogstarter.com/";



request(url, function(err,resp,body){
 const $ = cheerio.load(body);
 const title = $('div[class="title"]> h1');
 const titletext= title.text().trim();
 const content = $('div[class="content"]>p');
 const contenttext= content.text().trim();
 const siteFoot  = $('div[class="pad append-clear"] > p');
 const siteFoottext= siteFoot.text().trim();

 const everything = {
     heading : titletext,
     body : contenttext,
     ending : siteFoottext
 };
  console.log(everything);
});


app.listen(port);
console.log('server running on ' + port);


