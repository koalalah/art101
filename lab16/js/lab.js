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

$.ajax({
    url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json"),
    type: "GET",
    dataType: "json",

    success: function(response) {
        const data = JSON.parse(response.contents);
        let comicDiv = $("<div></div>");
         comicDiv.append(`<h2>${data.title}</h2>`);
         comicDiv.append(`<img src="${data.img}" alt="${data.alt}" title="${data.alt}">`);
        $("#output").append(comicDiv);
    },

    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});