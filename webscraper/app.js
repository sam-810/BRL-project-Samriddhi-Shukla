var express = require("express");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Simple index route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });
  

// Start the server
app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});

var axios = require("axios");
var cheerio = require("cheerio");

/* Test Axios with Cheerio */
axios.get("https://idioms.thefreedictionary.com/light").then(function(response) {
   
    var $ = cheerio.load(response.data);

    var idioms = [];
    var links = [];
    var listItems = $("ul.idiKw li a").each(function(i, elem) {
        idioms.push($(elem).text());
        links.push("https://thefreedictionary.com/" + $(elem).attr("href"));
    });

    console.log(idioms);
    console.log(links);
});



var mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/idioms_db";
mongoose.connect(MONGODB_URI);

scrape(req.params.searchTerm)
.then(function(foundIdioms) {
    console.log("scraped:");
    console.log(foundIdioms);
    // Save scraped Idioms
    foundIdioms.forEach(function(eachIdiom) {
        Idiom.create(eachIdiom)
        .then(function(savedIdiom) {
            // If saved successfully, print the new Idiom document to the console
            console.log(savedIdiom);
        })
        .catch(function(err) {
            // If an error occurs, log the error message
            console.log(err.message);
        });
    });
   

    res.json(foundIdioms);
})
.catch(function(err) {
    res.json(err);
});