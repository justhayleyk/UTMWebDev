const http = require('http');

const PORT1 = 7000;
const PORT2 = 7500;

function handleRequestGood(request, response) {
  response.end(`You look beautiful today!`);
}

function handleRequestNotGood(request, response) {
  response.end(`You could do better with mySQL!`);
}

const server = http.createServer(handleRequestGood);
const server1 = http.createServer(handleRequestNotGood);

server.listen(PORT1, function() {
  console.log(`Server is listening on port ${PORT1}`);
});

server1.listen(PORT2, function() {
  console.log(`Server is listening on port ${PORT2}`);
});
