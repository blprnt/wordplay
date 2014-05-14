var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var t = require('wordplay.js').tryThis();
  response.write("Hello World!! Exclamation!" + t;
  response.end();
}).listen(12892);


