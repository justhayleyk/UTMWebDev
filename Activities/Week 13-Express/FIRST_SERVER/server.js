const http = require('http');

const PORT = 3000;

function handleRequest(request, response) {
  response.end(`Its alive`);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});
