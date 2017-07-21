# Week Two Challenge

Complete as many exercises below as possible. At the very least, you need to complete the first exercise in order to consider this challenge successful.
#### **Pro-Tips:**
  - You can run your files from the command line using node (e.g. `node my_file.js`)
  - Don't forget that you can print something to your terminal window using `console.log()` (e.g. `console.log("Hello World!");`)

## API Request
Open `api_request.js` and follow the directions in that file for tasks #1 and #2. Don't forget to run the file locally to check that you've done the tasks correctly!

## Haxor
Create a file called `haxor.js`.

You are an elite hacker and thus, must type like one. Write a function called `hackIt` that takes a string and programmatically changes it to 1337 speak (e.g. "e" becomes 3, "o" becomes 0, and "cks" becomes "x").

Test with the following strings:
  - `hackIt("Hello");` should print "H3110" to the console
  - `hackIt("Hacks");` should print "Hax" to the console
  - `hackIt("noob");` should print "n00b" to the console

## Air Conditioning
Create a file called `airConditioning.js`.

Define a function `acAction` that takes, as arguments, the current temperature, whether the A/C is functional or not, and the desired temperature .
  - If the air conditioner is functional and the current temperature is above the desired temperature, return the string "Turn on the A/C, please."
  - If the air conditioner is non-functional and the current temperature is above the desired temperature, return the string "Fix the A/C now! It's hot and I'm dying!"
  - If the air conditioner is non-functional and the current temperature is below the desired temperature, return the string "Fix the A/C whenever you have the chance. It's cool..."

## Evening
Create a file called `evenOdd.js`.

Write a JavaScript function called `evening` that loops through an Array and checks each number.
  - If the number is even, print the number to the console.
  - If the number is odd, print the string "That's odd..." to the console.

Sample Array:
```javascript
var num = [38, 4, 452, 66, 292349, 11, 4254, 174, 52, 2452, 2, 1314, 62490, 1833, 412874, 13636, 139107, 137, 894, 2098, 24742, 197453, 5205]
```
