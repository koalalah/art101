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

// Sorts the characters of a string in alphabetical order.


let variants = ["Air bender", "Earth Bender", "Water Bender", "Fire Bender"];

function sortIntoAnElement(dataLength) {
 
  let remainer = dataLength % 4;
  $("#output").append(". You are a " + variants[remainer] + "!!");
}


function whatHappensOnClick() {
  console.log("click");

  let data = $("#input").val();
  let dataLength = data.length;

  if (data && dataLength <= 24) {
    $("#output").append("You have provided: " + data);
    sortIntoAnElement(dataLength);
    console.log("there is some data");
  }

  else if (dataLength >= 25) {
    $("#output").append("Too much of a name");
  }

  else {
    $("#output").append("Please enter a name");
  }
  
}

$("#button").click(whatHappensOnClick);
