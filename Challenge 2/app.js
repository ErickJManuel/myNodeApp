<!--
/*
	1.1.	Add an event listener on the server variable that listens to the request event. The event listener should take a callback function with
			two arguments, request and response.
	1.2.	Move the logic for handling the request from the http.createServer() callback to your new 'request' event listener. Remember to remove
			the http.createServer() callback once the code has been moved.
	1.3.	Remove the original request callback.
	2.1.	Add a second 'request' handler to the HTTP server.
	2.2.	From inside of the new handler, log the message "New request coming in..." using console.log().
	3.1.	Listen for the 'close' event on the server. The event listener should take a callback function that accepts no arguments.
	3.2.	Inside the 'close' callback, log the message "Closing down the server...".
*/

/*
Original Code

var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.listen(8080);
*/

var http = require('http');

var server = http.createServer();					// Step 1.3

server.on('request', function(request, response) {	// Step 1.1
  response.writeHead(200);
  response.write("Hello, this is dog");				// Step 1.2
  response.end();
});

server.on('request', function(request, response) {	// Step 2.1
	console.log('New request coming in...');		// Step 2.2
});

server.on('close', function(){						// Step 3.1
	console.log('Closing down the server...');		// Step 3.2
});

server.listen(8080);
//-->
