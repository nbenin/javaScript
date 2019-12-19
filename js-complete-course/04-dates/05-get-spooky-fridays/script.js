/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // Get year that user Inputs and check if integer
        let userInputtedYear = document.getElementById("year").value;
        if (Number.isInteger(userInputtedYear) === false) {
            alert("please enter a real number");

        }

        // if an integer, calculate friday the 13s
        else {
            
        }

    })

})();
