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

    // adding event listeners to buttons
    document.getElementById('part-one').addEventListener('click', function() {

        // set new value, if 500, reset to 460
        let newInnerValue = parseInt(document.getElementById('part-one').innerHTML, 10) + 1;
        if (newInnerValue === 500) {
            newInnerValue = 460;
        }

        // if under 10, prepend with a zero, else set innerHTML and parse to string for later concatenation
        if (newInnerValue.length < 2) {
            newInnerValue += "0";
        }
        document.getElementById('part-one').innerHTML = newInnerValue.toString(10);


    });
    document.getElementById('part-two').addEventListener('click', function() {
        let newInnerValue = parseInt(document.getElementById('part-two').innerHTML, 10) + 1;
        if (newInnerValue === 100) {
            newInnerValue = 0;
        }
        if (newInnerValue.length < 2) {
            newInnerValue += "0";
        }
        document.getElementById('part-two').innerHTML = newInnerValue.toString(10);
    });
    document.getElementById('part-three').addEventListener('click', function() {
        let newInnerValue = parseInt(document.getElementById('part-three').innerHTML, 10) + 1;
        if (newInnerValue === 100) {
            newInnerValue = 0;
        }
        if (newInnerValue.length < 2) {
            newInnerValue += "0";
        }
        document.getElementById('part-three').innerHTML = newInnerValue.toString(10);
    });
    document.getElementById('part-four').addEventListener('click', function() {
        let newInnerValue = parseInt(document.getElementById('part-four').innerHTML, 10) + 1;
        if (newInnerValue === 100) {
            newInnerValue = 0;
        }
        if (newInnerValue.length < 2) {
            newInnerValue += "0";
        }
        document.getElementById('part-four').innerHTML = newInnerValue.toString(10);
    });

})();
