const http = require('http');
const fs = require('fs');

const PORT = 3000;

let server = http.createServer(function(req, res) {
  let path = req.url;

  switch (path) {
    case '/':
      return fs.readFile('index.html', 'utf8', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    case '/food':
      return fs.readFile('food.html', 'utf8', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    case '/movies':
      return fs.readFile('index.html', 'utf8', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    case '/css':
      return fs.readFile('index.html', 'utf8', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    default:
      return res.end('opps');
  }
});

server.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
