<!--
/*
	1.	Instead of passing the content to response.write(), pass it to response.end().
	2.	
*/

/* original code

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
}).listen(8080);
*/

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.end("Hello, this is dog");
}).listen(8080);
//-->
