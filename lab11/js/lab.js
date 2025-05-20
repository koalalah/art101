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

function sortString(inputString) {

  return inputString.split('').sort().join('');
  
}


$("#submit").click(function(){

const userName = $("#user-name").val();


userNameSorted = sortString(userName);


$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});
