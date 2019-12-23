/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', function() {

    // Get values and store in variable
    let firstPassword = document.getElementById('pass-one').value;
    let secondPassword = document.getElementById('pass-two').value;
    let longestPassword;
    let passwordsSame = false;

    // find longest password
    if (firstPassword.length > secondPassword.length) {
        longestPassword = firstPassword;
    }
    else {
        longestPassword = secondPassword;
    }

    // check character by character if same
    for (i = 0; i < longestPassword.length; i++) {
        if (firstPassword[i] === secondPassword[i]) {
            passwordsSame = true;
        }
        else {
            passwordsSame = false;
            break;
        }
    }

    // if same green, else red
    if (passwordsSame === true) {
        document.getElementById('pass-one').style.borderColor = 'green';
        document.getElementById('pass-two').style.borderColor = 'green';
    }
    else {
        document.getElementById('pass-one').style.borderColor = 'red';
        document.getElementById('pass-two').style.borderColor = 'red';
    }
    });
})();
