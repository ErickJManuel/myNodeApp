<!--
/*
var highfive = require('./high_five.js');
highfive();
*/

/*
Challenge 4.3 Export a function
	1.	Move the myRequest function and the http require into my_request.js
	3.	Require the my_request.js module in app.js.

Original Code

var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};

myRequest('Hello, this is dog.');
*/

/*
var myRequest = require('./my_request');

myRequest('Hello, this is dog.');
*/

/*
	4.4 Exporting An Object
*/
var logger = require('./logger');

logger.info('This is some information');
logger.warn('something bad is happening');
//-->
