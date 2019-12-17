/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // for loop 1-100

    for (let fizzBuzzNumber = 0; fizzBuzzNumber <= 100; fizzBuzzNumber++) {
        if (fizzBuzzNumber % 3 == 0 && fizzBuzzNumber % 5 == 0) {
            console.log("fizzbuzz");
        }
        else if (fizzBuzzNumber % 3 == 0) {
            console.log("fizz");
        }
        else if (fizzBuzzNumber % 5 == 0) {
            console.log("buzz");
        }
        else {
            console.log(fizzBuzzNumber);
        }
    }

})();
