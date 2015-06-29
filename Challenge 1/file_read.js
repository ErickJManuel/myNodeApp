<!--
/*
	1.	Start by changing the call from readFileSync() to readFile().
	2.	Next, add a callback method to the readFile() call. This method should accept error and contents parameters.
	3.	To finish it up, remove the contents var declaration, and move the call to console.log() inside your callback.
*/

/*
Original Code

var fs = require('fs');

var contents = fs.readFileSYnc('index.html');
console.log(contents);
*/

var fs = require('fs');

var contents = fs.readFileSYnc('index.html', function(err, contents){
	console.log(contents);
});

//-->
