/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function buttonPressed(event) {
    let element = event.target;
    alert(element.id);
}

(function() {
    document.getElementsByTagName("actions").onclick = buttonPressed();

})();

