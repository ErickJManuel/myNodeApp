<!--
var request = require('request');
var url = require('url');

// route definition
app.get('/tweets/:username', function(req, response) {
	var username = req.params.username;					// gotten from the dynamic passing from the get method

	// options
	options = {
		protocol: "http:",
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: {screen_name: username, count: 10} 		// get the last 10 tweets for screen_name
	}

	// call our request with the url  the response will come back to this function call
	var twitterUrl = url.format(options);

	// pipe the response back in to the response that goes back to the user's browser
	// replace with line below to gain access to the err, res, and body
	// request(twitterUrl).pipe(response);
	request(url, function(err, res, body) {
		// parse the JSON that we get back from the response file
		var tweets - JSON.parse(body);

		// we need to figure out what data is going to go into our response so we can render out the tweets
		// do this by setting a locals property on our express response
		response.locals = {tweets: tweets, name: username};

		// lastly we tell our app which template to render
		response.render('tweets.ejs');
	});
});

/*
	tweets.ejs example
	$ node app.js
	go to the browser and go to localhost:8080/tweets/codeschool

*/

/*
	This code as is will not work
	The twitter API has changed since this code was first written
	You have to authenticate even when you want to pull a user's twitter stream and get the data back in json format
	Will have to add more code to get this to work

	To get to run from the command line
		$ node app.js

		Sending the name of the user who's feed we want to display
		$ curl -s http://localhost:8080/tweets/eallam

	this returns json in basic format so in order to get it to a more readable format we download prettyjson
		$ npm install prettyjson -g

	Now we can redirect the output and get pretty json
		$ curl -s http://localhost:8080/tweets/eallam | prettyjson

	Now, how do we get this to show up on our webpage using templates?
*/

//-->
