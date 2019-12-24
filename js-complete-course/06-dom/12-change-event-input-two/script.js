/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // listening for keyup
    document.getElementById("pass-one").addEventListener("keyup", function() {
        let userInformation = document.getElementById("pass-one").value;

        // if length of input is less than 8, not ok
        if (userInformation.length < 8) {
            document.getElementById("validity").innerHTML = "Not OK";
        }

        // else, check each character if number, and if at least 2 numbers, OK
        else {
            let numberCount = 0;
            for (let x = 0; x < userInformation.length; x++) {
                if (isNaN(userInformation[x])) {
                    continue;
                }
                else {
                    numberCount++;
                }
            }
            if (numberCount >= 2) {
                document.getElementById("validity").innerHTML = "OK";
            }
        }
    });

})();
