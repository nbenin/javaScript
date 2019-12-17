/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function buttonPressed(x) {

    // Set variables for calculations
    let firstNumber = parseInt(document.getElementById("op-one").value);
    let secondNumber = parseInt(document.getElementById("op-two").value);

    // take id and use for switch statement
    switch (x) {
        case "addition":
            alert(firstNumber + secondNumber);
            break;
        case "substraction":
            alert(firstNumber - secondNumber);
            break;
        case "multiplication":
            alert(firstNumber * secondNumber);
            break;
        case "division":
            alert(firstNumber / secondNumber);
            break;
    }
}

