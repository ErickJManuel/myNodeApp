<!--
/*
	1.	Create a new EventEmitter object and assign it to a variable called 'chat'.
	2.	Next, let's listen for the 'message' event on our new chat object. Remember to add a callback that accepts the message parameter.
	3.	Log the message to the console using console.log(). 
*/

/*
Original Code

var events = require('events');
var EventEmitter = events.EventEmitter;

*/

var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();				// step 1

chat.on('message', function(message){		// step 2
	console.log(message);					// step 3
});
//-->
