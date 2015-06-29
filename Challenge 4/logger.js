<!--
/*
	1.	In the logger.js file, export the info function so we can use it in app.js by assigning it to the exports object.
	2.	In the logger.js file, export the warn function so we can use it in app.js by assigning it to the exports object.
	3.	In the logger.js file, export the error function so we can use it in app.js by assigning it to the exports object.

Original Code
var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
*/
exports.warn = function(message) {			// Step 2
  console.log("Warning: " + message);
};

exports.info = function(message) {			// Step 1
  console.log("Info: " + message);
};

exports.error = function(message) {			// Step 3
  console.log("Error: " + message);
};
//-->
