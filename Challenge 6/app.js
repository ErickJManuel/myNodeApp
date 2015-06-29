<!--
/*
	1.	Using the http module, create an new http server and pass the express app as the listener for that new server.
	2.	Using the socket.io module, listen for requests on the http server. Store the return object of this operation in a variable called io.
	3.	Use the object stored in io to listen for client 'connection' events. Remember, the callback function takes one argument, which is the client object that has connected.
	4.	When a new client connects, log a message using console.log().
	5.	Finally, we want to tell our http server to listen to requests on port 8080.

var express = require('express');
var app = express();
var server = require('http').createServer(app);		// step 1
var io = require('socket.io')(server);				// step 2

io.on('connection', function(client){				// step 3
	console.log("Client connected...");				// step 4
});

server.listen(8080);								// step 5
*/

/*
	1.	In the server, listen for 'question' events from clients.
	2.	Now, emit the 'question' event on all the other clients connected, passing them the question data.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
	console.log("Client connected...");

	client.on('queston', functio(question){
		client.broadcast.emit('question', question)
	});
});

server.listen(8080);
*/

/*
	1.	First, when a client emits a 'question' event, we want to set the value of question_asked to true.
	2.	Second, when a client emits a 'question' event, we want to broadcast that question to the other clients.
	3.	Finally, when a client emits a 'question' event, check to make sure question_asked is not already set to
		true. We only want to allow one question per user, so make sure that we only set the value of question_asked
		and broadcast the question to other clients when the value of question_asked is not already true.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {
  	if(!client.question_asked){
	    client.broadcast.emit('question', question);
    	client.question_asked = true;
    };
  });
});

server.listen(8080);
*/

/*
	1.	With the client, listen for the 'answer' event from clients.
	2.	Now, emit the 'answer' event on all the other clients connected, passing them the question data.
*/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
	console.log("Client connected...");

	// listen for answers here
	client.on('answer', function(question, answer) {
		client.broadcast.emit('answer', question, answer);
	});

	client.on('question', function(question) {
		if(!client.question_asked) {
			client.question_asked = true;
			client.broadcast.emit('question', question);
		}
	});
});

server.listen(8080);
//-->