/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // randomize a number and set variables for counting and comparison
    let guessThisNumber = Math.floor(Math.random() * 100 + 1);
    let guessedNumber = parseInt(window.prompt("Guess the number between 1 and 100!"));

    // checking that number entered is actually a number
    while (isNaN(guessedNumber)) {
        guessedNumber = parseInt(window.prompt('please enter a real number'));
    }

    let numberOfGuesses = 1;

    // while loop to verify number
    while (guessedNumber !== guessThisNumber) {
        if (guessedNumber > guessThisNumber) {
            guessedNumber = window.prompt('Lower, try again!');
            numberOfGuesses++;
        }
        else if (guessedNumber < guessThisNumber) {
            guessedNumber = window.prompt('Higher, try again!');
            numberOfGuesses++;
        }
        else {
            alert("That's it! You needed " + numberOfGuesses + " guesses! The number was " + guessThisNumber + "!");
            return;
        }
    }



})();


