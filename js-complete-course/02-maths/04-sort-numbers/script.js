/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Listen for click
    document.getElementById("run").addEventListener("click", function() {

        // Get value and turn into an array
        let stringToBeTurnedIntoArray = document.getElementById("numbers").value;
        let arrayToBeSorted = stringToBeTurnedIntoArray.split(", ");

        //display sorted array
        alert(arrayToBeSorted.sort(function(a, b){return a-b}));

    });

})();
