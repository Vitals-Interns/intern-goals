// This week's challenge: Gif of Thrones
// Augment the code below to do the following:
// * Make a get request to "https://gist.githubusercontent.com/gretchenziegler/4ad8dbee5bd7ad54d196074e91f86b95/raw/2e2b15daff819a3386430b19f5d078d41d63ce1f/got.json" to get a list of all of the Stark names
// * Using that list, make a request to the giphy random endpoint (see your Hubot code) to get a gif url for each character in the list
// * Your function should print out all of the urls at once

// If you're not sure what to do, refer to the week two api_request.js challenge :-)

var request = require('request');

request("https://gist.githubusercontent.com/gretchenziegler/4ad8dbee5bd7ad54d196074e91f86b95/raw/2e2b15daff819a3386430b19f5d078d41d63ce1f/got.json", function(err, res, body){

});
