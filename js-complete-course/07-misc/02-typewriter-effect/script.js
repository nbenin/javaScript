/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // mostly from https://www.w3schools.com/howto/howto_js_typewriter.asp
    // get text from target in a variable and empty the tag
    let textToBeTransformed = document.getElementById("target").innerHTML;
    document.getElementById("target").innerHTML = "";
    let textCounter = 0;
    newFunction();

    // loop
    function newFunction () {
        if (textCounter < textToBeTransformed.length) {
            let randomSpeed = Math.floor(Math.random() * (200 - 25) + 25);
            console.log(randomSpeed);
            document.getElementById("target").innerHTML += textToBeTransformed.charAt(textCounter);
            textCounter++;
            setTimeout(newFunction, randomSpeed);
        }
    }

})();
