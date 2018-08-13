var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.open('mynewfile2.txt', 'w', function (err) {
    if (err) throw err;
    console.log('Saved2!');
  });

  fs.writeFile('mynewfile3.txt', 'Hello content 3!', function (err) {
    if (err) throw err;
    console.log('Saved3!');
  });

  fs.appendFile('mynewfile1.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

  fs.writeFile('mynewfile3.txt', 'This is new content', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  fs.rename('mynewfile1.txt', 'myrenamedfile1.txt', function (err) {
    if (err) throw err;
    console.log('File renamed!');
  });

}).listen(8080);
