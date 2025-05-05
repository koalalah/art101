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

function sortUserName() {
let userName = prompt  ("Please enter your name: ");
let sortedName = userName.split("").sort().join("");

return sortedName;
}
console.log(sortUserName);

document.open();
document.writeln("Sorted name: ", sortUserName());
