/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Listen for clicks

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let firstArgument = document.getElementById("op-one").value;
        let secondArgument = document.getElementById("op-two").value;

        alert(Number(firstArgument) + Number(secondArgument));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let firstArgument = document.getElementById("op-one").value;
        let secondArgument = document.getElementById("op-two").value;

        alert(Number(firstArgument) - Number(secondArgument));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let firstArgument = document.getElementById("op-one").value;
        let secondArgument = document.getElementById("op-two").value;

        alert (Number(firstArgument) * Number(secondArgument));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let firstArgument = document.getElementById("op-one").value;
        let secondArgument = document.getElementById("op-two").value;

        alert(Number(firstArgument) / Number(secondArgument));
    });
})();
