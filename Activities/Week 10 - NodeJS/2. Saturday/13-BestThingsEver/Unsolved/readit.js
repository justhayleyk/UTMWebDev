var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  }

  var filetext = data.split(',');

  filetext.forEach(element => {
    console.log(element);
  });

  // console.log(filetext);
});
