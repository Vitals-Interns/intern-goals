//Part One

//Make a get request to "http://app-ops.aws.mdx.med/clients" and print a list of all of the clients to the console.
//Update the code IN THIS FILE. Remember that this is JavaScript, not CoffeeScript!
//Run your code from the terminal by running node quick_challenge.js. Note: you need to be in the week_four directory.

var request = require('request');

request("", function(err, res, body){

});

//Part Two

//For each client that returns, hit the where endpoint for that client (e.g. for bcbsnc, this endpoint is "http://app-ops.aws.mdx.med/where?client=bcbsnc"). If the environment is active, return "<client> <env> <variant> is active!"; if not, return "<client> <env> <variant> is not active!".