let request = require('request');
let fs = require('fs');

let TV = function() {
  this.findShow = function(name) {
    // The following URL can be used to search the TV Maze API for a given show
    let url = 'http://api.tvmaze.com/singlesearch/shows?q=' + name;

    request(url, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        let tvObject = JSON.parse(body);

        console.log('The tv show you requested:');

        let result = `
        -----------------------------------
        Show Title: ${tvObject.name}
        Genre(s): ${tvObject.genres.join(', ')}
        Rating: ${tvObject.rating.average}
        Network: ${tvObject.network.name}
        Summary: ${tvObject.summary}
        -----------------------------------`;

        fs.appendFile('log.txt', result, err => {
          if (err) throw err;
        });
        console.log(result);
      } else {
        console.log('Error :' + error);
        return;
      }
    });
  };

  this.findActor = function(name) {
    // The following URL can be used to search the TV Maze API for a given show
    let url = 'http://api.tvmaze.com/search/people?q=' + name;

    request(url, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        let actorObject = JSON.parse(body);

        console.log('The actor you requested:');

        let result = `
         -----------------------------------
         Actors Name: ${actorObject[0].person.name}
         Birthday: ${actorObject[0].person.birthday}
         Gender: ${actorObject[0].person.gender}
         Country: ${actorObject[0].person.country.name}
         TV Maze URL: ${url}
         -----------------------------------`;

        fs.appendFile('log.txt', result, err => {
          if (err) throw err;
        });
        console.log(result);
      } else {
        console.log('Error :' + error);
        return;
      }
    });
  };
};

module.exports = TV;
