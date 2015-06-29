<!--
/*
Challenge 4.3
	2.	Export the myRequest function.
		entire code is Step 2
*/
var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};

module.exports = myRequest;
//-->