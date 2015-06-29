<!--
/*
	1.	Use the fs module to create a Readable stream for fruits.txt. Store the new stream in a variable called file.
	2.	Next, listen to the readable event on the newly created stream and give it a callback.
	3.	Inside the callback, read the data chunks from the stream and print them to the console using console.log() -
		you might want to use a while loop to do this. Don't forget to call toString() on the data before printing it.

var fs = require('fs');

var file = fs.createReadStream('fruits.txt');				// Step 1

file.on('readable', function) {								// Step 2
	var chunk = null;										// Entire block is Step 3

	while (null !== (chunk = file.read())) {
		console.log(chunk.toString());
	}
});
*/

/*
	1.	Start by removing the code for the readable handler.
	2.	Call file.pipe(), passing it the stream to write to.

Original Code:

var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.on('readable', function(){
  var chunk;
  while(null !== (chunk = file.read())){
    console.log(chunk.toString());
  }
});

Edited Code:
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');
												// Step 1 all the missing code
file.pipe(process.stdout);						// Step 2
*/

/*
	1.	You'll need to consult the pipe documentation to figure out the option which keeps the Write stream open and
		dispatches the end event.

Original Code:
var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile);

file.on('end', function(){
  destFile.end('Finished!');
});

Edited Code:
var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, {end: false});										// Step 1

file.on('end', function(){
  destFile.end('Finished!');
});
*/

/*
	1.	 Use pipe() to send index.html to the response.

Original Code
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  
  response.pipe(file);
}).listen(8080);
*/

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');

  file.pipe(response);
}).listen(8080);
//-->
