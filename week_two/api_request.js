// Task #1: Run `node api_request.js` in your console. Then, explain the code in the comments. Use the model below to help!

// What does line 4 do? Line 4 sets a variable request as a new 'request' object ('request' is a node module that helps to make API calls).
var request = require('request');

// What does line 7 do?
request("https://feeds.citibikenyc.com/stations/stations.json", function(err, res, body){
  // What does line 9 do?
  var response = JSON.parse(body);
  // What does line 11 do?
  var stations = response.stationBeanList;
  // What does line 13 do?
  var stationNames = [];
  // What do lines 15-17 do?
  for (var i = 0; i < stations.length; i++){
    stationNames.push(stations[i].stationName);
  }
  // What does line 19 do?
  console.log(stationNames);
});

// Task #2: In the space below, make a get request to "https://gist.githubusercontent.com/gretchenziegler/4ad8dbee5bd7ad54d196074e91f86b95/raw/2e2b15daff819a3386430b19f5d078d41d63ce1f/got.json", and print a list of all of the Game of Thrones house names to the console.
