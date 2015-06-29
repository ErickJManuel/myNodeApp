<!--
/*
	1.	Create a GET route for '/tweets' and give it the proper callback. The callback function should accept two arguments: the request and the response.
	2.	Send back the file tweets.html, which lives under the project's root path. Remember to use __dirname to locate tweets.html.
	3.	Finally, have the express app listen on port 8080.

var express = require('express');
var app = express();

app.get('/tweets', function(request, response) {		// Step 1
	response.sendFile(__dirname + "/tweets.html");		// Step 2
});

app.listen(8080);										// Step 3
*/

/*
	1.	Start by creating a GET route for '/quotes' that takes a name parameter as part of the URL path.
	2.	Now, use the name parameter from the URL to retrieve a quote from the quotes object and write it out to the response. Note: No piping here,
		just write the quote string to the response like you did in previous levels (and then close the response).

var express = require('express');
var app = express();

var quotes = {
	'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
	'berners-lee': 'The Web does not just connect machines, it connects people',
	'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
	'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(request, response){	// Step 1
	response.end(quotes[request.params.name]);
});

app.listen(8080);
*/

/*
	1.	First, render the quote.ejs template to the response.
	2.	
	3.	

var express = require('express');
var app = express();

var quotes = {
	'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
	'berners-lee': 'The Web does not just connect machines, it connects people',
	'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
	'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
	var quote = quotes[req.params.name];

	res.render('quote.ejs', {					// Step 1
		name: req.params.name,
		quote: quote
	});	
});

app.listen(8080);
*/

/*
	Complete the URL options which will be sent into the the url module's format method. The URL you'll want to construct is
	the following: http://search.twitter.com/search.json?q=codeschool

	1.	Add the protocol attribute to options.
	2.	Add the host attribute to options.
	3.	Add the pathname attribute to options.
	4.	Add an attribute which takes an object of query parameters, in this case we only need q to search Twitter.

var url = require('url');

options = {
	// add URL options here
	protocol: 'http',				// Step 1
	host: 'search.twitter.com',		// Step 2
	pathname: 'search.json',		// Step 3
	query: {q: 'codeschool'}		// Step 4
};

var searchURL = url.format(options);
console.log(searchURL);
*/

/*
	1.	To start, require the request module and assign the return function to a variable.
	2.	Next, issue a request to searchURL. Remember, the callback function for the request function takes three arguments: error, response and body.
	3.	Finally, log the response body to the console using console.log().

var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
var request = require('request');						// Step 1

request (searchURL, function(error, response, body){	// Step 2
	console.log(body);									// Step 3
});
*/

/*
	1.	Require the express module.
	2.	Create the Express server and name it app.
	3.	Create a route for GET requests to / (root path). Remember, the callback function takes two arguments: a request req and a response res.
	4.	In our new route, issue a request to searchURL and pipe the results into the response.
	5.	Finally, tell app to listen on port 8080.
*/
var url = require('url');
var request = require('request');
var express = require('express');			// Step 1

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app = express(); // Create server here	// Step 2

app.get('/', function(req, res){			// Step 3
	request(searchURL).pipe(res);			// Step 4
}).listen(8080);							// Step 5
//-->
