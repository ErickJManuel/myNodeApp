<!--
// This will only allow for one function to be exposed since we are setting the module.exports to a function
var hello = function(){
	console.log("hello!");
}

// exports defines what require returns
module.exports = hello;	// In order to make our module public or expose it, we need to include this line

//-->
