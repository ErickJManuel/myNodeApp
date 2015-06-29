<!--
var EventEmitter = require('events').EventEmitter;

// For our custom EventEmitter we want to create a logger
var logger = new EventEmitter();	//we want our logger to sometimes emit error/warn/info events

// Now we need to create a listener for the above event so below is the code to listen for an error event
logger.on('error', function(message){
	console.log('ERR: ' + message);
});

/*
	Above code broken down
	logger.on('error') -> listen for error on our logger
	, function(message) { -> run this function when the above event is triggered
	console.log('ERR: ' + message); -> this is the logic to be run when the above function is launched
*/

// To trigger or emit the event, call logger.emit send in the event we want to trigger and any additional parameters, see example below
logger.emit('error', 'Spilled Milk');	// this line prints below line
//	ERR: Spilled Milk

logger.emit('error', 'Eggs Cracked');	// this line prints below line
//	ERR: Eggs Cracked

/*
	Back in level 1 We had a function with a request and a response and we wanted that callback to be called everytime our server emitted a
	request event

	Here is the code we wrote, but you may be wondering how is this event being attached?
	function(request, response){  }
	When 'request' event is emitted

	http.createServer(function(request, response){   });
	But what is really going on here?  http://nodejs.org/api/

	If you look up the createServer function you will see that it returns a new web server object, we pass as a parameter a request listener
	which listens on the request event. If we look up in the documentation we will see it is an EventEmitter which contains the request event
	request returns 2 parameters to the callback, which is what we are using as our only 2 parameters in our createServer function

	Alternate Syntax:
	Instead of sending the callback into createServer, like below:
	http.createServer(function(request, response){  });
		is the same as

	We can create the server with no parameters, and then tell the server that on the request event, call this function
	var server = http.createServer();
	server.on('request', function(request, response){   });

	The second method is typically how we add event listeners in node

	For instance if we want to listen to a 'close' event on our server to call a function we can simply write
	server.on('close', function(){	});
//-->
