// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
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

var myTransport = ["Honda Accord", " bus", " lightrail", " friends' vehicles"];
console.log("My Transportations: " + myTransport)

var myMainRide = {
  make: "Honda",
  model: "Accord",
  color: "Lunar Silver",
  year: 2017,
  age: function () {
    return 2025-2017;
  }
};

console.log(myMainRide.age());

document.open();
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeln("My Main Ride: </pre>");
document.writeln(JSON.stringify(myMainRide, null, '\t'));