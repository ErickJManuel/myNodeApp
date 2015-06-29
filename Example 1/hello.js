<!--
/*
var http = require('http'); // this is how we require modules - This is how we include libraries in node

http.createServer(function(request, response) {	// we are calling the create server function which takes in one parameter as its callback that parameter contains both request and response
	response.writeHead(200);	// status code in header
	response.write("Hello, this is dog.");	// response body
	response.end(); // Close the connection
}).listen(8080); // Listen for connections on this port

console.log('Listening on port 8080...');
*/

// Making our hello world app simulate a long running event
var http = require('http'); // this is how we require modules - This is how we include libraries in node

http.createServer(function(request, response) {		// we are calling the create server function which takes in one parameter as its callback that parameter contains both request and response
	response.writeHead(200);						// status code in header
	response.write("Dog is running.");				// response body
	setTimeout(function(){ 							// Represents a long running process	So now our application has 2 events, the original request, and now the timeout event
		response.write("Dog is done.");
		response.end(); 							// Close the connection
	}, 5000); 										// This line is stating that we are pausing for 5000ms = 5s
}).listen(8080); 									// Listen for connections on this port

console.log('Listening on port 8080...');
//-->
