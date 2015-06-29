<!--
var express = require('express');					// require the express module
var app = express();								// initialize express application
var server = require('http').createServer(app);		// create an http server and have it dispatch requests to express
var io = require('socket.io')(server);				// require the socket io module and allow it to use http server to listen to requests
// socket io and express are sharing the same http server

io.on('connection', function(client){				// listen for connection events inside socket io
	console.log('Client connected...');				// when a client connects we log out client connected to the console

	client.on('messages', function(data){			// listen for 'messages' events and log it out to the console for now
		console.log(data);
	});

	client.on('messages', function(data){			// listen for 'messages' events and broadcast the message to all other clients connected
		client.broadcast.emit("messages", data);
	});

	client.on('join', function(name){				// join event
		client.nickname = name;						// sets the nickname associated with this client this is setting a value on the client
													// setting values this way means that the value is available on both the server and the client
	});

	client.emit('messages', {hello: 'world'});		// emitting the messages event on our client (browser) and we are sending the object hello: 'world'
});

app.get('/', function(req, res){					// Serve our index.html file
	res.sendFile(__dirname + '/index.html');
});

server.listen(8080);								// have our server listen on port 8080


// New io.on with nicknames added
io.on('connection', function(client){				// listen for connection events inside socket io
	console.log('Client connected...');				// when a client connects we log out client connected to the console

	client.on('join', function(name){				// join event
		client.nickname = name;						// sets the nickname associated with this client
	});

	client.on('messages', function(message){		// listen for 'messages' events and log it out to the console for now
		var nickname = client.nickname;				// get the nickname of this client prior to broadcasting the message

		client.broadcast.emit("message", nickname + ": " + message);	// broadcast the name and message

		client.emit("message", nickname + ": " + message);	// send the message back to our client
	});

});

app.get('/', function(req, res){					// Serve our index.html file
	res.sendFile(__dirname + '/index.html');
});

server.listen(8080);								// have our server listen on port 8080
//-->