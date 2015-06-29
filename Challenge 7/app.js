<!--
/*
	1.	Require the redis module and assign it to a variable called redis.
	2.	Create a redis client and assign it to a variable called client.
	3.	On the client, set the name property to your name.

var redis = require('redis');			// Step 1
var client = redis.createClient();		// Step 2

client.set('name', 'Erick');			// Step 3
*/

/*
	1.	Use the redis client to issue a get command using the 'question' key to retrieve a value. Remember, the get
		function takes a callback which expects two arguments, error and data.
	2.	Log the value retrieved with console.log.

var redis = require('redis');
var client = redis.createClient();

client.get('question', function(error, data){		// Step 1
	console.log(data);								// Step 2
});
*/

/*
	1.	Using the redis client's lpush command, insert question1 into the questions list. Then, console.log the result
		you receive. Remember, the lpush function takes a callback as its last argument, which expects an error and
		value to be passed as arguments.
	2.	Using the redis client's lpush command, insert question2 into the questions list. Then console.log the result
		you receive.

var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush('questions', question1, function(error, value){		// Step 1
	console.log(value);
});

client.lpush('questions', question2, function(error, value){		// Step 2
  console.log(value);
});
*/

/*
	1.	Use the lrange() command to return all of the items from the questions key.
	2.	Now that we have called lrange(), use console.log to log the result from redis.

var redis = require('redis');
var client = redis.createClient();
      
client.lrange('questions', 0, -1, function(error, message){
	console.log(message);
});
*/

/*
	1.	Use the lpush command to add new questions to the list named questions. Do this inside the listener for
		the 'question' event.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      // add the question to the list here
      redisClient.lpush('questions', question);
    }
  });
});
*/

/*
	1.	Use the lrange command to retrieve a list of questions that represent the questions list within redis.
	2.	Inside of the lrange callback, use a forEach loop to iterate through the questions and emit() each
		question to the client. Remember, don't use broadcast.emit because we only want to send the questions
		to the client that is connecting to the server.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
	redisClient.lrange('questions', 0, -1, function(error, questions){	// step 1
		questions.forEach(function(question){							// step 2
			client.emit('question', question);
		});
	});

	client.on('answer', function(question, answer) {
		client.broadcast.emit('answer', question, answer);
	});

	client.on('question', function(question) {
		if(!client.question_asked) {
			client.question_asked = true;
			client.broadcast.emit('question', question);
			redisClient.lpush("questions", question);
		}
	});
});
*/

/*
	1.	Add a callback to lpush that will be used to limit the size of the list down to a max of 20.
	2.	Use the ltrim command to limit the size of the list stored within redis to a maximum size of 20. 
*/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
	redisClient.lrange("questions", 0, -1, function(err, questions) {
		questions.forEach(function(question) {
			client.emit("question", question);
		});
	});

	client.on('answer', function(question, answer) {
		client.broadcast.emit('answer', question, answer);
	});

	client.on('question', function(question) {
		if(!client.question_asked) {
			client.question_asked = true;
			client.broadcast.emit('question', question);
			redisClient.lpush("questions", question, function(){		// step 1
				redisClient.ltrim("questions", 0, 19);
			});
		}
	}); 

});

//-->
