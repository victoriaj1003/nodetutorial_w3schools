var http = require('http');

// create server object
http.createServer (function (req, res) {
  res.write('Hello World!'); // write respose to client
  res.end ()// end response
}).listen(8080); // the server object listens on port 8080
