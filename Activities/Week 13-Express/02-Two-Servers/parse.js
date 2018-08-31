const http = require('http');

const PORT = 8080;

let server = http.createServer(function(req, res) {
  let path = req.url;

  let homehtml =
    '<html><body style="background-color: black; color: white;"><h1>Welcome to this Mini Server Site</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus malesuada tellus non mattis. Cras libero est, posuere eu elit eget, congue sagittis massa. Donec feugiat, erat in ultricies cursus, neque sapien sollicitudin metus, eu rutrum est ante a ipsum. </p></body></html>';

  let abouthtml =
    '<html><body body style="background-color: grey; color: white;"><h1>Welcome to the About Area Site</h1><p> This was created with node and some wicked little npm packages.</p></body></html>';

  let errhtml =
    '<html><body style="text-align:center; background-color: #F0F0F0; color: black;"><h1>Uh Oh -- You went to far into the internet!</h1><p> This is not a page</p><img src="https://i.gifer.com/G2TW.gif" style="width: 300px"></body></html>';

  switch (path) {
    case '/':
      return res.end(homehtml);
    case '/about':
      return res.end(abouthtml);
    default:
      return res.end(errhtml);
  }
});

server.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
