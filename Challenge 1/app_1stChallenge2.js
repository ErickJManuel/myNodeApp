<!--
/*
	1.	After response.writeHead(200), add a call to fs.readFile() that reads index.html asynchronously. Remember to pass a callback function,
		that accepts an error parameter, and a contents parameter.
	2.	Now that you have the file contents, write it to the response.
	3.	To finish up, end the response after the file contents have been written.

	1.7	Consult the node documentation, and add a 'Content-Type' of 'text/html' to the response.
	1.8 Instead of passing the content to response.write(), pass it to response.end().

*/

/* original code

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	response.writeHead(200);

	response.end();
}).listen(8080);
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});	// Step 1.7

	fs.readFile('index.html', function(err, contents){		// Step 1
		response.write(contents);							// Step 2
		response.end();										// Step 3
	});

}).listen(8080);
//-->
