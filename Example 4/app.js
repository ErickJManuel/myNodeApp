<!--
/*
First Example:

var hello = require('./custom_hello');
var gb = require('./custom_goodbye');

hello();
gb.goodbye();

// Can also write the goodbye call into a single line if we do the following
// require('./custom_goodbye').goodbye();
*/

/*
	Example with my_module.js

var myMod = require('./my_module');

myMod.foo();
myMod.bar();
*/

/*
	Making http requests example

Original Code:
var http = require('http');

var message = "Here's looking at you, kid.";
var options = {
	hosts: 'localhost',
	port: 8080,
	path: '/',
	method: 'POST'
}

// Initialize the request, pass in our options and pass in our callback function which is executed when the response returns
var request = http.request(options, function(response) {
	response.on('data', function(data){ // We are listening for the data event
		console.log(data);				// when data gets received we log it out to the console
	});
});

request.write(message); 				//begins the request
request.end();

Modified code for invoking via a makeRequest call, see last line
var http = require('http');

var makeRequest = function(message) {
	var options = {
		hosts: 'localhost',
		port: 8080,
		path: '/',
		method: 'POST'
	}

	var request = http.request(options, function(response) {
		response.on('data', function(data){
			console.log(data);
		});
	});

	request.write(message);
	request.end();
}

// We can now just invoke this by the below code
makeRequest("Here's looking at you, kid.");
*/

var makeRequest = require('./make_request');

makeRequest("Here's looking at you kid.");
makeRequest("Hello, this is dog.");
//-->
