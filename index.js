const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const json2csv = require("json2csv").Parser;

const source = "https://www.theblogstarter.com/";


( async () => {
    let siteData = []
    const response = await request({
        uri : siteData,
        header : {},
        json : true
    });

    let $ = cheerio.load(response)
    let siteFoot = $('div[class="pad append-clear"] > p').text().trim
    
    siteData.push({
      footer
    });
    const newLocal = new json2csv();
    const j2cp = newLocal
    const csv = j2cp.parse(siteData)

    fs.writeFileSync("./result.csv", csv, "utf-8");
}
)();