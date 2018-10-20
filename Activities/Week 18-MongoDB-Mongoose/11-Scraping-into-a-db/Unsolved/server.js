// Dependencies
var express = require('express');
var mongojs = require('mongojs');
// Require axios and cheerio. This makes the scraping possible
var axios = require('axios');
var cheerio = require('cheerio');

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = 'scraper';
var collections = ['scrapedData'];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on('error', function(error) {
  console.log('Database Error:', error);
});

app.get('/', function(req, res) {
  res.send('Hello world');
});

// Retrieve data from the db
app.get('/all', function(req, res) {
  db.scrapedData.find({}, function(error, found) {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.get('/scrape', function(req, res) {
  axios
    .get('https://www.yellowpages.ca/search/si/1/hair%20salon/Toronto')
    .then(function(response) {
      var $ = cheerio.load(response.data);

      $('.listing__content').each((i, element) => {
        const company = $(element)
          .find('.listing__name--link')
          .text()
          .replace(/\s\s+/g, ' ');
        const phone = $(element)
          .find('.mlr__submenu__item')
          .text()
          .replace(/\s\s+/g, ' ');
        const website = $(element)
          .find('.mlr__item--website')
          .children('a')
          .attr('href');

        if (company && phone && website) {
          // Insert the data in the scrapedData db
          db.scrapedData.insert(
            {
              company: company,
              phone: phone,
              website: website
            },
            function(err, inserted) {
              if (err) {
                console.log(err);
              } else {
                console.log(inserted);
              }
            }
          );
        }
      });
    });

  // Send a "Scrape Complete" message to the browser
  res.send('Scrape Complete');
});

// Listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});
