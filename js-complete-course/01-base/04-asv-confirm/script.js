/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function userInformation() {

    // your code here
    var userAge = prompt("What is your age?");
    var userGender = prompt("What is your gender?");
    var userTown = prompt("Where town do you live?");

    if (confirm("Your name is " + userAge + ", your gender is" + ", your town is " + userTown + "?")) {
        alert("Thank you, " + userAge + " year old " + userGender + " from " + userTown);
    }
    else {
        alert("Please enter correct information");
        userInformation();
    }

})();
