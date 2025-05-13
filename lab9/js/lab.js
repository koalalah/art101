// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// // this is an example function and this comment tells what it doees and what parameters are passed to it.
// function myFunction(param1, param2) {
//   // some code here
//   // return results;
// }

// function main() {
//   console.log("Main function started.");
//   // the code that makes everything happen
// }

// // let's get this party started
// main();

/*
lab.js - This simple JavaScript/jQuery script uses button to modify some elements on the page.

Requirements: jQuery my be loaded for this scrip to work.

Author: Kayla Harimurti
Date: May 12 202
*/
$("#challenge").append("<button id='button-challenge'>Challenge</button>");
$("#problems").append("<button id='button-problems'>Problems</button>");
$("#reflection").append("<button id='button-reflection'>Reflections</button>");
$("#results").append("<button id='button-results'>Results</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});// add a click listener to the challenge button

$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// add a click listener to the challenge button
$("#button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});

// add a click listener to the challenge button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});