/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // setting sttribute to max length of 10
    document.getElementById("pass-one").setAttribute("maxlength", "10");

    // adding listener to input field
    document.getElementById("pass-one").addEventListener("keyup", function() {
        let userInformation = document.getElementById("pass-one").value;
        document.getElementById("counter").innerHTML = userInformation.length + "/10";
    });

})();
