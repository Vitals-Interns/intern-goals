var request = require('request');

// You can find information about NYC parking violations at "https://data.cityofnewyork.us/resource/dbw3-ymb4.json"

// Below, write code that prints out the definition for all parking violations with a fine more than $110 below 96th street in Manhattan.
request("https://data.cityofnewyork.us/resource/dbw3-ymb4.json#"), 
function(err, res, body)
var res = JSON.parse(body);
var parking  = response.definitionList;
var parkingviolationName = []
for (var i = 0; i < parking.length; i++){
    parkingviolationName.push(parking[i].parkingviolationName);
}
console.log(parkingviolationName)
// Look at week two's api_request.js file if you don't remember how to do this in JavaScript.
