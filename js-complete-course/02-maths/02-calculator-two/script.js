/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test() {
    return true;
}

(function() {
    document.getElementsByTagName("button").onclick() {
        switch() {
            case "+":
                let firstArgument = document.getElementById("op-one").value;
                let secondArgument = document.getElementById("op-two").value;

                let result = Number(firstArgument) + Number(secondArgument);

                alert(result);
                break;

            case "-":
                let firstArgument = document.getElementById("op-one").value;
                let secondArgument = document.getElementById("op-two").value;

                let result = Number(firstArgument) - Number(secondArgument);

                alert(result);
                break;

            case "*":
                let firstArgument = document.getElementById("op-one").value;
                let secondArgument = document.getElementById("op-two").value;

                let result = Number(firstArgument) * Number(secondArgument);

                alert(result);
                break;

            case "/":
                let firstArgument = document.getElementById("op-one").value;
                let secondArgument = document.getElementById("op-two").value;

                let result = Number(firstArgument) - Number(secondArgument);

                alert(result);
        }
    });
    return true;
})();

