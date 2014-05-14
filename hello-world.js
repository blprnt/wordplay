var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World!! Exclamation!" + tryThis());
  response.end();
}).listen(12892);

function tryThis() {
	return("BLABBBERSCYTHE!");
}
