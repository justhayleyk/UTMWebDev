// Dependencies
var express = require('express');
var mysql = require('mysql');

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'seinfeld_db'
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Routes
app.get('/cast', function(req, res) {
  connection.query('SELECT * FROM actors', function(err, result) {
    var html = '<h1> The Best Characters on Seinfeld </h1>';

    html += '<ul>';
    for (var i = 0; i < result.length; i++) {
      html += '<li><p>Cast Member: ' + result[i].name + ' </p>';
      html += ' <p>Coolness out of 10: ' + result[i].coolness_points + '</p>';
      html += ' <p>Attitude: ' + result[i].attitude + '</p></li>';
    }

    html += '</ul>';

    res.send(html);
  });
});

app.get('/coolness-chart', function(req, res) {
  connection.query(
    '  SELECT name, coolness_points FROM actors WHERE coolness_points ORDER BY coolness_points DESC;',
    function(err, result) {
      var html = '<h1> The Cool Rating of Characters on Seinfeld </h1>';

      html += '<ol>';
      for (var i = 0; i < result.length; i++) {
        html += '<li><p>Cast Member: ' + result[i].name + ' </p>';
        html +=
          ' <p> Coolness  ' + result[i].coolness_points + ':10 ' + '</p></li>';
      }

      html += '</ol>';

      res.send(html);
    }
  );
});

app.get('/attitude/:att', function(req, res) {
  let mood = req.params.att;

  connection.query('SELECT * FROM actors WHERE attitude=?', [mood], function(
    err,
    result
  ) {
    var html = '<h1> The Attitude of Characters on Seinfeld </h1>';

    for (var i = 0; i < result.length; i++) {
      html += '<p>Cast Member: ' + result[i].name + ' </p>';
      html += ' <p> Attitude  ' + result[i].attitude + '</p>';
    }

    res.send(html);
  });
});

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost:' + PORT);
});
