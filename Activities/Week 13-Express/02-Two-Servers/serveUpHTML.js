const http = require('http');
const fs = require('fs');

const PORT = 3000;

let server = http.createServer(function(req, res) {
  fs.readFile('index.html', 'utf8', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
