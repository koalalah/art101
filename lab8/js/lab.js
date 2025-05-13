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

function oddNum(x) {
    return x % 2 !== 0;
}

array = [225, 14, 1, 38, 57, 34, 82]

console.log("Is this odd?", oddNum(1));
console.log("Is this odd?", oddNum(2));

array = [22, 15, 5, 108, 237, 18, 339];
console.log("My array: ", array);

var result = array.map(oddNum);
console.log("Oddness!!", result);

var result = array.map(function(x){
    return x*x;
})

console.log("squared of array", result);
