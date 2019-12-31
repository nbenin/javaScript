/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // variables where info will be stored
    let firstButtonValue;
    let secondButtonValue;
    let thirdButtonValue;
    let fourthButtonValue;

    // adding event listeners to buttons
    document.getElementById('part-one').addEventListener('click', function() {
        let firstButtonValue = document.getElementById('part-one').value;
    });
    document.getElementById('part-two').addEventListener('click', function() {
        let secondButtonValue = document.getElementById('part-two').value;
    });
    document.getElementById('part-three').addEventListener('click', function() {
        let thirdButtonValue = document.getElementById('part-three').value;
    });
    document.getElementById('part-four').addEventListener('click', function() {
        let fourthButtonValue = document.getElementById('part-four').value;
    });

})();
