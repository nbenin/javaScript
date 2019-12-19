/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // get Date and store in variable
    let currentTime = new Date();

    // checking saying good evening until 5am
    if (currentTime.getHours() >= 18 || currentTime.getHours() < 5) {
        document.getElementById("target").innerHTML = "Good Evening!";
    }

    else if (currentTime.getHours() === 17) {
        if (currentTime.getMinutes() >= 30) {
            document.getElementById("target").innerHTML = "Good Evening!";
        }
        else {
            document.getElementById("target").innerHTML = "Hello";
        }
    }

    else {
        document.getElementById("target").innerHTML = "Hello";
    }

})();
