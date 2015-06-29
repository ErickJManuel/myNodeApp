<!--
var redis = require('redis');
var client = redis.createClient();

//			key			value
client.set("message1", "hello, yes this is dog");
client.set("message2", "hello, no this is spider");

client.get("message1", function(err, reply){
	console.log(reply);		// returns hello, hes this is dog
});


// Add a string to the messages list
var message = "Hello, this is dog";

client.lpush("messages", message, function(err, reply){	// callback is optional see below for what it returns
	console.log(reply);		// replies with list length - 1 in this case
});

// Add a string to the messages list
var message = "Hello, no this is spider";

client.lpush("messages", message, function(err, reply){
	console.log(reply);		// list length is now 2
});

// using ltrim
var message = "Hello, this is dog";

client.lpush("messages", message, function(err, reply){
	client.ltrim("messages", 0, 1);		// trim keeps first two strings and removes the rest
});

// Retrieving from list
client.lrange("messages", 0, -1, function(err, messages){
	console.log(messages);		// replies with all strings in the list
});

// Below is the output
// ["Hello, no this is spider", "Oh sorry, wrong number"]

/*
	Example of storing messages in an array
	Don't forget redis includes above!
*/
var messages = [];	// store messages in an array

var storeMessage = function(name, data){
	messages.push({name: name, data: data}); // add message to end of array
	if (messages.legth > 10){
		messages.shift();	// if more than 10 messages long, only keep the latest 10 messages, remove the oldest message
	}
};

io.sockets.on('connection', function(client){
	client.on('join', function(name){
		client.set('nickname', name);
		client.broadcast.emit("chat", name + "joined the chat");

		messages.forEach(function(message){		// iterate through the messages array and emit a message on the connecting client for each
			client.emit("messages", message.name + ": " + message.data);
		});
	});

	client.on("messages", function(message){
		client.get("nickname", function(error, name){
			client.broadcast.emit("messages", name + ": " + message);
			client.emit("messages", name + ": " + message);
			storeMessage(name, message);	// when client sends a message call storeMessage
		});
	});
});

/*
	EXAMPLE OF USING THE LIST DATA STRUCTURE IN OUR CODE

	Don't forget redis includes at the very top of this code
*/
var storeMessage = function(name, data){
	var message = JSON.stringify({name: name, data: data}); // need to turn JSON object into string to store in redis

	redisClient.lpush("messages", message, function(err, response){	//
		redisClient.ltrim("messages", 0, 9);				// ltrim to keep the newest 10 items
	});
};

client.on('join', function(name){
	redisClient.lrange("messages", 0, -1, function(err, messages){
		messages = messages.reverse();		// output in reverse order so they are emitted in the correct order

		messages.forEach(function(message){
			message = JSON.parse(message);	// parse into JSON object
			client.emit("messages", message.name + ": " + message.data);
		});
	});
});

/*
	Final step for this app, add a SET of currently logged in users
	SETS are lists of unique data
*/
// adding members of the names set  sadd for set add
client.sadd ("names", "Dog");
client.sadd ("names", "Spider");
client.sadd ("names", "Gregg");

// removing members of the names set srem for set remove
client.srem ("names", "Spider");

// replying with all members of set
client.smembers("names", function(err, names){
	console.log(names);
});

// displays ["Dog", "Gregg"]

/*
	Modify join listener to now display when a chatter logs in and also add that chatter to our chatter set
*/
client.on('join', function(name){
	client.broadcast.emit("add chatter", name);	// notify other clients a chatter has joined

	redisClient.smembers('names', function(err, names){	// emit all the currently logged in chatters to the newly connected client
		names.forEach(function(name){
			client.emit('add chatter', name);
		});
	});

	redisClient.sadd("chatters", name);	// add name to chatters set
});

/*
	Remove chatter from list when they disconnect
*/
client.on('disconnect', function(name){
	client.get('nickname', function(err, name){
		client.broadcast.emit("remove chatter", name);

		redisClient.srem("chatters", name);
	});
});
//-->
